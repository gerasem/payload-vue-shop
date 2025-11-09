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
  // храним категории + массив товаров
  const items = ref<IItemGrouped[]>([])
  const itemsOnMainPage = ref<IItemGrouped[]>([])

  // -------------------------------
  // Получить товары по категории
  // -------------------------------
  const getItemsByCategory = async (category: ICategory): Promise<void> => {
    // уже есть — ничего не делаем
    if (items.value.some(i => i.category === category.slug)) return

    const data = await gqlRequest<ProductsByCategoryIdQuery>(
      ITEMS_BY_CATEGORY_ID,
      {
        where: { categories: { in: [category.id] } },
      },
    )

    const docs: IItem[] = data.Products?.docs ?? []

    items.value.push({
      category: category.slug,
      products: docs,
    })
  }

  // -------------------------------
  // Для главной страницы
  // -------------------------------
  const getItemsForMainPage = async (category: ICategory, limit?: number): Promise<void> => {
    if (itemsOnMainPage.value.some(i => i.category === category.slug)) return

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

  // -------------------------------
  // Загрузить все категории
  // -------------------------------
  const getAllItems = async (): Promise<void> => {
    const categoryStore = useCategoryStore()

    for (const category of categoryStore.categories) {
      if (!items.value.some(i => i.category === category.slug)) {
        await getItemsByCategory(category)
      }
    }
  }

  // -------------------------------
  // Геттер — товары по категории
  // -------------------------------
  const itemsByCategory = (categorySlug: string): IItem[] => {
    return items.value.find(i => i.category === categorySlug)?.products ?? []
  }

  const itemsByCategoryForMainPage = (categoryHandle: string): IItem[] => {
    return itemsOnMainPage.value.find(i => i.category === categoryHandle)?.products ?? []
  }

  return {
    items,
    itemsOnMainPage,

    getItemsByCategory,
    getItemsForMainPage,
    getAllItems,

    itemsByCategory,
    itemsByCategoryForMainPage,
  }
})
