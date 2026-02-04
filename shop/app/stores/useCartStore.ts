import { defineStore, skipHydrate } from 'pinia'
import type { ICartItemRaw, ICartItem } from '@/types'
import { formatEuro } from '@/utils/price'
import { usePayloadProductsByIds } from '@/composables/usePayloadProductsByIds'

export const useCartStore = defineStore('cart', () => {
  // Minimal data stored in localStorage
  // skipHydrate ensures the client value (from LS) isn't overwritten by the empty server value
  const rawItems = ref<ICartItemRaw[]>(skipHydrate([]))

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

  // Load immediately on client side to avoid flash of empty content
  if (import.meta.client) {
    loadFromLS()
    isInitialized.value = true
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

  // Initialize the cart — call once on app bootstrap
  async function init() {
    // Data is already loaded from LS by the immediate check above
    await hydrate()
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
      const products = await fetchProductsForCart(productIds)

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
    } finally {
      isHydrating.value = false
    }
  }

  // Helper function to fetch products by IDs
  // Helper function to fetch products by IDs
  async function fetchProductsForCart(productIds: number[]) {
    // Wrapper for usePayloadProductsByIds to maintain interface or simple internal helper
    return await usePayloadProductsByIds(productIds)
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
  // Computed getters
  // Use rawItems for count/hasItems so they display INSTANTLY from localStorage
  const count = computed(() => rawItems.value.reduce((sum, i) => sum + i.qty, 0))
  const totalInEUR = computed(() => items.value.reduce((sum, i) => sum + i.priceInEUR * i.qty, 0))
  const totalFormatted = computed(() => formatEuro(totalInEUR.value))
  const hasItems = computed(() => rawItems.value.length > 0)

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
    isHydrating,
    hydrate
  }
})
