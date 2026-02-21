import { defineStore, skipHydrate } from 'pinia'
import type { ICartItemRaw, ICartItem } from '@/types'
import { formatEuro } from '@/utils/price'
import { usePayloadProductsByIds } from '@/composables/usePayloadProductsByIds'

export const useCartStore = defineStore('cart', () => {
  // Minimal data stored in localStorage
  // skipHydrate ensures the client value (from LS) isn't overwritten by the empty server value
  const rawItems = ref<ICartItemRaw[]>(skipHydrate([]))

  const userStore = useUserStore()
  const serverCartId = ref<number | null>(null)

  // Full cart items enriched with product data
  const items = ref<ICartItem[]>([])

  // Flag to check if we have loaded from LS
  const isInitialized = ref(false)

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

  // Initialize the cart — call once on app bootstrap (client-side)
  async function init() {
    loadFromLS()
    isInitialized.value = true

    // If user is already logged in, fetch server cart
    if (userStore.loggedIn) {
      await fetchServerCart()
    }

    await hydrate()
  }

  // Persist rawItems to localStorage whenever it changes
  watch(
    rawItems,
    () => {
      // Don't save if we haven't loaded yet (prevents overwriting LS with empty array on init)
      if (!isInitialized.value) return
      localStorage.setItem('payload-cart', JSON.stringify(rawItems.value))
    },
    { deep: true }
  )

  // Watch for user login to merge/fetch cart
  watch(
    () => userStore.loggedIn,
    async loggedIn => {
      if (loggedIn) {
        await mergeGuestCart()
      } else {
        // On logout, clear local items
        items.value = []
        rawItems.value = []
        serverCartId.value = null
      }
    }
  )

  // === Server Sync Logic ===

  async function fetchServerCart() {
    if (!userStore.user) return

    try {
      // Fetch cart for current user
      // Assuming 'carts' collection has 'customer' field
      const { docs } = await $payloadFetch<{ docs: any[] }>('/api/carts', {
        params: {
          'where[customer][equals]': userStore.user.id,
          depth: 0 // We only need IDs primarily, but depth 0 gives structure
        }
      })

      if (docs && docs.length > 0) {
        const cart = docs[0]
        serverCartId.value = cart.id

        // Map server items to rawItems
        if (cart.items) {
          rawItems.value = cart.items.map((i: any) => ({
            productId: i.product && typeof i.product === 'object' ? i.product.id : i.product,
            variantId: i.variant && typeof i.variant === 'object' ? i.variant.id : i.variant,
            qty: i.quantity
          }))
        }
      }
    } catch (e) {
      console.error('Failed to fetch server cart', e)
    }
  }

  async function saveToServer() {
    if (!userStore.loggedIn || !userStore.user) return

    try {
      const payload = {
        customer: userStore.user.id,
        items: rawItems.value.map(i => ({
          product: i.productId,
          variant: i.variantId,
          quantity: i.qty
        }))
      }

      if (serverCartId.value) {
        // Update existing cart
        await $payloadFetch(`/api/carts/${serverCartId.value}`, {
          method: 'PATCH',
          body: payload
        })
      } else {
        // Create new cart
        const newCart = await $payloadFetch<{ id: number }>('/api/carts', {
          method: 'POST',
          body: payload
        })
        serverCartId.value = newCart.id
      }
    } catch (e) {
      console.error('Failed to save cart to server', e)
    }
  }

  async function mergeGuestCart() {
    // 1. Fetch server cart first to see what's there
    // Save local items to a temp var.
    const localItems = [...rawItems.value] // Copy guest items

    await fetchServerCart() // This updates rawItems with server data

    if (localItems.length === 0) {
      // No local items to merge, but we still need to hydrate
      // so the server cart is displayed correctly
      await hydrate()
      return
    }

    // Merge logic
    localItems.forEach(localItem => {
      const existing = rawItems.value.find(
        i => i.productId === localItem.productId && i.variantId === localItem.variantId
      )
      if (existing) {
        existing.qty += localItem.qty
      } else {
        rawItems.value.push(localItem)
      }
    })

    await saveToServer()
    await hydrate() // Refresh UI
  }

  // Hydration state
  const isHydrating = ref(false)

  // Rebuild full cart items using raw data + fresh product info
  async function hydrate() {
    // If no raw items, clear hydrated items
    if (rawItems.value.length === 0) {
      items.value = []
      return
    }

    isHydrating.value = true

    try {
      // Fetch all products needed for cart
      const productIds = [...new Set(rawItems.value.map(item => item.productId))]
      const products = await usePayloadProductsByIds(productIds)

      items.value = rawItems.value
        .map(raw => {
          const product = products.get(raw.productId)

          // If product fetch failed (or deleted), we temporarily hide it from "items" (view)
          // BUT we do NOT remove it from "rawItems" (storage) to prevent data loss on network error.
          if (!product) {
            console.warn(`Product ${raw.productId} not found during hydration`)
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
    } catch (e) {
      console.error('Cart hydration failed:', e)
    } finally {
      isHydrating.value = false
    }
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

    // Sync if logged in
    if (userStore.loggedIn) {
      await saveToServer()
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

      if (userStore.loggedIn) {
        await saveToServer()
      }

      await hydrate()
    }
  }

  // Remove item from cart
  async function remove(productId: number, variantId: number | null | undefined = null) {
    rawItems.value = rawItems.value.filter(
      item => !(item.productId === productId && item.variantId === variantId)
    )

    if (userStore.loggedIn) {
      await saveToServer()
    }

    await hydrate()
  }

  // Clear entire cart
  async function clear() {
    rawItems.value = []
    items.value = []

    if (userStore.loggedIn) {
      await saveToServer()
    }
  }

  // Computed getters
  // Use rawItems for count/hasItems so they display INSTANTLY from localStorage
  const count = computed(() => rawItems.value.reduce((sum, i) => sum + i.qty, 0))
  const totalInEUR = computed(() => items.value.reduce((sum, i) => sum + i.priceInEUR * i.qty, 0))
  const totalFormatted = computed(() => formatEuro(totalInEUR.value))
  const hasItems = computed(() => rawItems.value.length > 0)

  // Shipping Logic
  const config = useRuntimeConfig()
  const shippingCost = (config.public.shippingCost as number) ?? 500
  const freeShippingThreshold = (config.public.freeShippingThreshold as number) ?? 5000

  const shippingTotal = computed(() => {
    if (totalInEUR.value >= freeShippingThreshold) {
      return 0
    }
    return shippingCost
  })

  const grandTotal = computed(() => totalInEUR.value + shippingTotal.value)
  const grandTotalFormatted = computed(() => formatEuro(grandTotal.value))
  const shippingFormatted = computed(() => formatEuro(shippingTotal.value))

  return {
    items,
    rawItems,
    count,
    totalInEUR,
    totalFormatted,
    hasItems,
    // Shipping fields
    shippingTotal,
    shippingFormatted,
    grandTotal,
    grandTotalFormatted,
    freeShippingThreshold,
    init,
    add,
    updateQuantity,
    remove,
    clear,
    isHydrating,
    isInitialized,
    hydrate
  }
})
