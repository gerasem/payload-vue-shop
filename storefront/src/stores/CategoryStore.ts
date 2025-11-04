import type { ICategory } from '@/interfaces/ICategory'
import { useLoaderStore } from '@/stores/LoaderStore'
import ApiService from '@/services/api/api'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CategoriesQuery } from '@/generated/graphql'
import { gqlRequest } from '@/services/api/api-payload'

import CATEGORIES_QUERY from '@/graphql/categories.gql'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<ICategory[]>([])
  const currentCategory = ref<ICategory | null>(null)
  const router = useRouter()
  const loaderStore = useLoaderStore()

  const fetchCategories = async (): Promise<void> => {
    if (categories.value.length) {
      return
    }
    const data = await gqlRequest<CategoriesQuery>(CATEGORIES_QUERY, loaderStore.LOADER_KEYS.CATEGORIES)
    categories.value = data?.Categories?.docs ?? []
    console.log('fetched categories:', data)
  }

  const getCategories = async () => {
    if (categories.value.length) {
      return
    }
    categories.value = await ApiService.fetchCategories(loaderStore.LOADER_KEYS.CATEGORIES)
  }

  const setCurrentCategory = (handle: string) => {
    if (!categories.value.length) return
    const foundCategory = categories.value.find((cat: ICategory) => cat.handle === handle)

    if (!foundCategory) {
      router.push({ name: '404' })
    } else {
      currentCategory.value = foundCategory
    }
  }

  return { categories, getCategories, currentCategory, setCurrentCategory, fetchCategories }
})
