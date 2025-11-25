import type { ICartItem, ICartItemLS } from '@/interfaces/ICartItem'
import { useItemStore } from '@/stores/ItemStore'
import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const itemStore = useItemStore()

  // Minimal data stored in localStorage
  const rawItems = ref<ICartItemLS[]>([])

  // Full cart items enriched with fresh data from itemStore
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

        if (!product) return null!

        const variant = raw.variantId
          ? product.variants?.docs?.find((v) => v.id === raw.variantId)
          : null

        const priceInEUR = variant?.priceInEUR ?? product.priceInEUR ?? 0

        return {
          variantId: raw.variantId,
          productId: raw.productId,
          qty: raw.qty,

          title: product.title,
          slug: product.slug,
          priceInEUR,
          image: product.gallery?.[0]?.url,

          hasVariant: !!variant,
          variantTitle: variant ? variant.options?.map((o) => o.label).join(' — ') : undefined,
        }
      })
      .filter(Boolean) as ICartItem[]
  }

  // Universal add-to-cart function (supports products with and without variants)
  async function add(
    productId: number | undefined,
    qty: number = 1,
    variantId: number | null = null,
  ) {
    console.log('CartStore.add', { productId, qty, variantId })
    if (!productId || qty <= 0) return

    const existing = rawItems.value.find(
      (i) => i.productId === productId && i.variantId === variantId,
    )

    if (existing) {
      existing.qty += qty
    } else {
      rawItems.value.push({ productId, variantId, qty })
    }

    hydrate() // refresh full cart items
  }

  // Remove item from cart
  function remove(productId: number, variantId: string | null = null) {
    rawItems.value = rawItems.value.filter(
      (item) => !(item.productId === productId && item.variantId === variantId),
    )
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

  return {
    items,
    rawItems,
    count,
    totalCents,
    hasItems,
    init, // call once in main.ts
    add,
    remove,
    clear,
    hydrate, // can be called manually if products were updated
  }
})
