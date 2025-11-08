import type { ProductsByCategoryIdQuery } from '@/generated/graphql'
import ITEMS_BY_CATEGORY_ID from '@/graphql/itemsByCategoryId.gql'
import { useCategoryStore } from '@/stores/CategoryStore'
import type { ICategory } from '@/interfaces/ICategory'
import type { IItem } from '@/interfaces/IItem'
import ApiService from '@/services/api/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import { gqlRequest } from '@/services/api/api-payload'

export const useItemStore = defineStore('item', () => {
  const items = ref<IItem[]>([])
  const itemsOnMainPage = ref<IItem[]>([])

  const getItemsByCategory = async (category: ICategory) => {
    if (items.value.some((item) => item.category === category.slug)) return

    // const products = await ApiService.fetchItemsByCategory(category.id)

    const data = await gqlRequest<ProductsByCategoryIdQuery>(ITEMS_BY_CATEGORY_ID, {
      where: { categories: { in: [category.id] } },
    })

    console.log('Fetched items for category', category.slug, data)

    items.value.push({
      category: category.slug,
      products: data.Products?.docs || [],
    })
  }

  const getItemsForMainPage = async (category: ICategory, limit?: number) => {
    if (itemsOnMainPage.value.some((item) => item.category === category.slug)) return

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

  const itemsByCategory = (categoryHandle: string) => {
    return items.value.find((item) => item.category === categoryHandle)?.products || []
  }

  const itemsByCategoryForMainPage = (categoryHandle: string) => {
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
