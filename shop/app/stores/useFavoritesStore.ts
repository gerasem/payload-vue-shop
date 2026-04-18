import { defineStore, skipHydrate } from 'pinia'
import type { IItem } from '@/types'
import { usePayloadProductsByIds } from '@/composables/usePayloadProductsByIds'

export const useFavoritesStore = defineStore('favorites', () => {
  const toast = useToast()
  const { t } = useI18n()

  // Minimal data stored in localStorage (just an array of product IDs)
  // skipHydrate ensures the client value (from LS) isn't overwritten by the empty server value
  const itemIds = ref<number[]>(skipHydrate([]))

  // Full products enriched
  const items = ref<IItem[]>([])

  const isInitialized = ref(false)
  const isHydrating = ref(false)

  // Load from localStorage on app start
  function loadFromLS() {
    try {
      const saved = localStorage.getItem('payload-favorites')
      if (saved) {
        itemIds.value = JSON.parse(saved)
      }
    } catch (e) {
      console.warn('Failed to load favorites from localStorage', e)
      itemIds.value = []
    }
  }

  // Initialize the store
  async function init() {
    loadFromLS()
    isInitialized.value = true
    await hydrate()
  }

  // Watch for changes and persist
  watch(
    itemIds,
    () => {
      if (!isInitialized.value) return
      localStorage.setItem('payload-favorites', JSON.stringify(itemIds.value))
    },
    { deep: true }
  )

  // Hydrate full item data from IDs
  async function hydrate() {
    if (itemIds.value.length === 0) {
      items.value = []
      return
    }

    isHydrating.value = true
    try {
      const productsMap = await usePayloadProductsByIds(itemIds.value)
      // Reconstruct array of IItems
      items.value = itemIds.value.map(id => productsMap.get(id)).filter(Boolean) as IItem[]
    } catch (e) {
      console.error('Failed to hydrate favorites:', e)
    } finally {
      isHydrating.value = false
    }
  }

  // Toggle favorite status
  async function toggle(product: { id: number; title?: string | null; [key: string]: any }) {
    if (!product || !product.id) return

    const index = itemIds.value.indexOf(product.id)
    if (index > -1) {
      // Remove
      itemIds.value.splice(index, 1)
      items.value = items.value.filter(i => i.id !== product.id)
    } else {
      // Add
      itemIds.value.push(product.id)
      items.value.push(product as IItem) // Optimistic push

      toast.add({
        title: t('Added to favorites'),
        description: product.title || undefined
      })
    }
  }

  const isFavorite = (productId: number | undefined) => {
    if (!productId) return false
    return itemIds.value.includes(productId)
  }

  const count = computed(() => itemIds.value.length)
  const hasItems = computed(() => itemIds.value.length > 0)

  return {
    itemIds,
    items,
    count,
    hasItems,
    isInitialized,
    isHydrating,
    init,
    hydrate,
    toggle,
    isFavorite
  }
})
