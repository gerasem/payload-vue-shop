import categoriesQuery from '@/graphql/categories.graphql?raw'
import type { CategoriesQuery } from '@/generated/graphql'

/**
 * Fetch categories for navigation bar
 * Returns minimal category data (id, title, slug)
 */
export async function usePayloadCategories() {
  const data = await usePayloadQuery<CategoriesQuery>(categoriesQuery)
  return data.Categories?.docs || []
}
