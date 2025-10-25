import { useCategoryStore } from '@/stores/CategoryStore'
import type { ICategory } from '@/interfaces/ICategory'
import { useLoaderStore } from '@/stores/LoaderStore'
import type { IItem } from '@/interfaces/IItem'
import ApiService from '@/services/api/api'
import { HttpTypes } from '@medusajs/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useItemStore = defineStore('item', () => {
  const items = ref<IItem[]>([])
  const itemsOnMainPage = ref<IItem[]>([])

  const getItemsByCategory = async (category: ICategory) => {
    const loaderStore = useLoaderStore()

    if (items.value.some((item) => item.category === category.handle)) return

    const products = await ApiService.fetchItemsByCategory(
      category.id,
      loaderStore.LOADER_KEYS.ITEMS,
    )

    items.value.push({
      category: category.handle,
      products,
    })
  }

  const getItemsForMainPage = async (category: ICategory, limit?: number) => {
    if (itemsOnMainPage.value.some((item) => item.category === category.handle)) return

    const products = await ApiService.fetchItemsByCategory(
      category.id,
      `items-${category.handle}`,
      limit,
    )

    itemsOnMainPage.value.push({
      category: category.handle,
      products,
    })
  }

  const getAllItems = async () => {
    const categoryStore = useCategoryStore()
    const store = useItemStore()

    for (const category of categoryStore.categories) {
      const exists = items.value.some((item) => item.category === category.handle)

      if (!exists) {
        await store.getItemsByCategory(category)
      }
    }
  }

  const itemsByCategory = (categoryHandle: string): HttpTypes.StoreProduct[] | [] => {
    return items.value.find((item) => item.category === categoryHandle)?.products || []
  }

  const itemsByCategoryForMainPage = (categoryHandle: string): HttpTypes.StoreProduct[] | [] => {
    return itemsOnMainPage.value.find((item) => item.category === categoryHandle)?.products || []
  }

  return {
    items,
    itemsOnMainPage,
    itemsByCategoryForMainPage,
    getItemsByCategory,
    itemsByCategory,
    getAllItems,
    getItemsForMainPage,
  }
})
