import { useItemStore } from '@/stores/ItemStore'
import type { IItem } from '@/interfaces/IItem'
import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

interface CartItemLS {
  variantId: string | null // null — product has no variants
  productId: number
  qty: number
}

interface CartItemFull {
  variantId: string | null
  productId: number
  qty: number
  product: IItem
  variant?: IItem['variants']['docs'][number]
  priceInEUR: number
  title: string
  image?: string
  slug: string
}

export const useCartStore = defineStore('cart', () => {
  const itemStore = useItemStore()

  // Minimal data stored in localStorage
  const rawItems = ref<CartItemLS[]>([])

  // Full cart items enriched with fresh data from itemStore
  const items = ref<CartItemFull[]>([])

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
    { deep: true },
  )

  // Initialize the cart — call once on app bootstrap (e.g. in main.ts)
  function init() {
    loadFromLS()
    hydrate() // immediately populate full items with current product data
  }

  // Rebuild full cart items using raw data + fresh product info from itemStore
  function hydrate() {
    if (!itemStore.items.length) {
      items.value = []
      return
    }

    items.value = rawItems.value
      .map((raw) => {
        const product = itemStore.items
          .flatMap((g) => g.products)
          .find((p) => p.id === raw.productId)

        if (!product) return null

        const variant = raw.variantId
          ? product.variants?.docs?.find((v) => v.id === raw.variantId)
          : null

        const priceInEUR = variant?.priceInEUR ?? product.priceInEUR ?? 0

        return {
          variantId: raw.variantId,
          productId: raw.productId,
          qty: raw.qty,
          product,
          variant,
          priceInEUR,
          title: variant?.title || product.title,
          slug: product.slug,
          image: product.gallery?.[0]?.url,
        }
      })
      .filter((item): item is CartItemFull => item !== null)
  }

  // Universal add-to-cart function (supports products with and without variants)
  async function add(
    productId: number | undefined,
    qty: number = 1,
    variantId: number | null = null,
  ) {
    if (productId === undefined) return
    const key = variantId ?? productId

    const existing = rawItems.value.find((i) => (i.variantId ?? i.productId) === key)

    if (productId !== undefined && existing) {
      existing.qty += qty
    } else {
      rawItems.value.push({
        variantId,
        productId,
        qty,
      })
    }

    hydrate() // refresh full cart items
  }

  // Remove item from cart
  function remove(productId: number | string, variantId: string | null = null) {
    const key = variantId ?? productId
    rawItems.value = rawItems.value.filter((i) => (i.variantId ?? i.productId) !== key)
    hydrate()
  }

  // Clear entire cart
  function clear() {
    rawItems.value = []
    items.value = []
  }

  // Computed getters
  const count = computed(() => items.value.reduce((sum, i) => sum + i.qty, 0))
  const totalCents = computed(() => items.value.reduce((sum, i) => sum + i.priceInEUR * i.qty, 0))
  const hasItems = computed(() => items.value.length > 0)
  const isEmpty = computed(() => items.value.length === 0)

  return {
    items,
    rawItems,
    count,
    totalCents,
    hasItems,
    isEmpty,

    init, // call once in main.ts
    add,
    remove,
    clear,
    hydrate, // can be called manually if products were updated
  }
})
