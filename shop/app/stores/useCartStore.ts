import { defineStore } from 'pinia'
import type { ICartItemRaw, ICartItem } from '@/types'
import { formatEuro } from '@/utils/price'

export const useCartStore = defineStore('cart', () => {
  // Minimal data stored in localStorage
  const rawItems = ref<ICartItemRaw[]>([])

  // Full cart items enriched with product data
  const items = ref<ICartItem[]>([])

  // Load cart from localStorage on app start
  function loadFromLS() {
    try {
      const saved = localStorage.getItem('payload-cart')
      if (saved) {
        rawItems.value = JSON.parse(saved)
      }
    } catch (e) {
      console.warn('Failed to load cart from localStorage', e)
      rawItems.value = []
    }
  }

  // Persist rawItems to localStorage whenever it changes
  watch(
    rawItems,
    () => {
      localStorage.setItem('payload-cart', JSON.stringify(rawItems.value))
    },
    { deep: true }
  )

  // Initialize the cart — call once on app bootstrap
  async function init() {
    loadFromLS()
    await hydrate()
  }

  // Rebuild full cart items using raw data + fresh product info
  async function hydrate() {
    if (rawItems.value.length === 0) {
      items.value = []
      return
    }

    // Fetch all products needed for cart
    const productIds = [...new Set(rawItems.value.map(item => item.productId))]
    const products = await fetchProductsForCart(productIds)

    items.value = rawItems.value
      .map(raw => {
        const product = products.get(raw.productId)

        if (!product) {
          console.warn(`Product ${raw.productId} not found, removing from cart`)
          return null
        }

        const variant = raw.variantId
          ? product.variants?.docs?.find((v: any) => v.id === raw.variantId)
          : null

        const priceInEUR = variant?.priceInEUR ?? product.priceInEUR ?? 0
        const inventory = product.enableVariants ? variant?.inventory : product.inventory

        return {
          variantId: raw.variantId,
          productId: raw.productId,
          qty: raw.qty,
          title: product.title || 'Unknown Product',
          slug: product.slug || '',
          priceInEUR,
          image: product.gallery?.[0]?.thumbnailURL ?? product.gallery?.[0]?.url,
          variantTitle: product.enableVariants ? variant?.title : undefined,
          inventory
        }
      })
      .filter(Boolean) as ICartItem[]

    // Remove items that failed to hydrate
    const validProductIds = new Set(items.value.map(item => item.productId))
    rawItems.value = rawItems.value.filter(raw => validProductIds.has(raw.productId))
  }

  // Helper function to fetch products by IDs
  async function fetchProductsForCart(productIds: number[]) {
    const productsMap = new Map()
    const nuxtApp = useNuxtApp()
    const config = useRuntimeConfig()
    const locale = nuxtApp.$i18n.locale.value

    // Fetch each product individually using direct $fetch
    for (const id of productIds) {
      try {
        const query = `
          query ProductById($locale: LocaleInputType!, $id: Int!) {
            Products(locale: $locale, where: { id: { equals: $id } }, limit: 1) {
              docs {
                id
                title
                slug
                priceInEUR
                inventory
                enableVariants
                gallery {
                  id
                  url
                  thumbnailURL
                }
                variants {
                  docs {
                    id
                    title
                    priceInEUR
                    inventory
                  }
                }
              }
            }
          }
        `

        const result = await $fetch(`${config.public.payloadUrl}/api/graphql`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query,
            variables: { locale, id }
          })
        })

        const product = (result as any)?.data?.Products?.docs?.[0]
        if (product) {
          productsMap.set(id, product)
        }
      } catch (error) {
        console.error(`Failed to fetch product ${id}:`, error)
      }
    }

    return productsMap
  }

  // Add item to cart (or update quantity if exists)
  async function add(
    productId: number | undefined,
    qty: number = 1,
    variantId: number | null = null
  ) {
    if (!productId || qty <= 0) return

    const existing = rawItems.value.find(
      i => i.productId === productId && i.variantId === variantId
    )

    if (existing) {
      existing.qty += qty
    } else {
      rawItems.value.push({ productId, variantId, qty })
    }

    await hydrate()
  }

  // Update item quantity
  async function updateQuantity(
    productId: number,
    variantId: number | null | undefined,
    qty: number
  ) {
    const item = rawItems.value.find(i => i.productId === productId && i.variantId === variantId)

    if (item) {
      item.qty = Math.max(1, qty) // Ensure at least 1
      await hydrate()
    }
  }

  // Remove item from cart
  async function remove(productId: number, variantId: number | null | undefined = null) {
    rawItems.value = rawItems.value.filter(
      item => !(item.productId === productId && item.variantId === variantId)
    )
    await hydrate()
  }

  // Clear entire cart
  function clear() {
    rawItems.value = []
    items.value = []
  }

  // Computed getters
  const count = computed(() => items.value.reduce((sum, i) => sum + i.qty, 0))
  const totalInEUR = computed(() => items.value.reduce((sum, i) => sum + i.priceInEUR * i.qty, 0))
  const totalFormatted = computed(() => formatEuro(totalInEUR.value))
  const hasItems = computed(() => items.value.length > 0)

  return {
    items,
    rawItems,
    count,
    totalInEUR,
    totalFormatted,
    hasItems,
    init,
    add,
    updateQuantity,
    remove,
    clear,
    hydrate
  }
})
