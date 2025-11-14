import type { CategoriesQuery } from '@/generated/graphql'
import { gqlRequest } from '@/services/api/api-payload'
import type { ICategory } from '@/interfaces/ICategory'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import CATEGORIES_QUERY from '@/graphql/categories.gql'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<ICategory[]>([])
  const currentCategory = ref<ICategory | null>(null)

  const fetchCategories = async (): Promise<void> => {
    // console.log('fetchCategories called')
    if (categories.value.length) {
      return
    }
    const data = await gqlRequest<CategoriesQuery>(CATEGORIES_QUERY)
    categories.value = data?.Categories?.docs ?? []
    // console.log('fetched categories:', data)
  }

  const setCurrentCategory = (handle: string) => {
    if (!categories.value.length) return
    const foundCategory = categories.value.find((cat: ICategory) => cat.slug === handle)

    const router = useRouter()
    if (!foundCategory) {
      router.push({ name: '404' })
    } else {
      currentCategory.value = foundCategory
    }

    // console.log('Current category set to:', currentCategory.value)
  }

  const hydrate = (data) => {
    // console.log('DATA IN HYDRATE:', data)
    if (data?.categories) {
      categories.value = data.categories
    }
  }

  return { categories, currentCategory, setCurrentCategory, fetchCategories, hydrate }
})
