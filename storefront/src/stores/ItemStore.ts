import type { ProductsByCategoryIdQuery } from '@/generated/graphql'
import ITEMS_BY_CATEGORY_ID from '@/graphql/itemsByCategoryId.gql'
import type { IItem, IItemGrouped } from '@/interfaces/IItem'
import { useCategoryStore } from '@/stores/CategoryStore'
import type { ICategory } from '@/interfaces/ICategory'
import ApiService from '@/services/api/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import { gqlRequest } from '@/services/api/api-payload'

export const useItemStore = defineStore('item', () => {
  const items = ref<IItemGrouped[]>([])
  const itemsOnMainPage = ref<IItemGrouped[]>([])

  const getItemsByCategory = async (category: ICategory): Promise<void> => {
    if (items.value.some((i) => i.category === category.slug)) return

    const data = await gqlRequest<ProductsByCategoryIdQuery>(ITEMS_BY_CATEGORY_ID, {
      where: { categories: { in: [category.id] } },
    })

    const docs: IItem[] = data.Products?.docs ?? []

    items.value.push({
      category: category.slug,
      products: docs,
    })
  }

  const getItemsForMainPage = async (category: ICategory, limit?: number): Promise<void> => {
    if (itemsOnMainPage.value.some((i) => i.category === category.slug)) return

    const products: IItem[] = await ApiService.fetchItemsByCategory(
      category.id,
      `items-${category.slug}`,
      limit,
    )

    itemsOnMainPage.value.push({
      category: category.slug,
      products,
    })
  }

  const getAllItems = async (): Promise<void> => {
    const categoryStore = useCategoryStore()

    for (const category of categoryStore.categories) {
      if (!items.value.some((i) => i.category === category.slug)) {
        await getItemsByCategory(category)
      }
    }
  }

  const itemsByCategory = (categorySlug: string): IItem[] => {
    return items.value.find((i) => i.category === categorySlug)?.products ?? []
  }

  const itemsByCategoryForMainPage = (categoryHandle: string): IItem[] => {
    return itemsOnMainPage.value.find((i) => i.category === categoryHandle)?.products ?? []
  }

  const hydrate = (data) => {
    console.log('DATA IN HYDRATE:', data)
    if (data?.items) {
      items.value = data.items
    }
  }

  return {
    items,
    itemsOnMainPage,

    getItemsByCategory,
    getItemsForMainPage,
    getAllItems,

    itemsByCategory,
    itemsByCategoryForMainPage,

    hydrate,
  }
})
