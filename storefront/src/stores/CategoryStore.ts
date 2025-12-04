import type { CategoriesQuery } from '@/generated/graphql'
import { gqlRequest } from '@/services/api/api-payload'
import type { ICategory } from '@/interfaces/ICategory'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import CATEGORIES_QUERY from '@/graphql/categories.gql'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<ICategory[]>([])

  const fetchCategories = async (): Promise<void> => {
    if (categories.value.length) {
      return
    }
    const data = await gqlRequest<CategoriesQuery>(CATEGORIES_QUERY)
    categories.value = data?.Categories?.docs ?? []
  }

  const hydrate = (data) => {
    if (data?.categories) {
      categories.value = data.categories
    }
  }

  return { categories, fetchCategories, hydrate }
})
