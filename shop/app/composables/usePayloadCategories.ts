import categoriesQuery from '@/graphql/categories.graphql?raw'

/**
 * Fetch categories for navigation bar
 * Returns minimal category data (id, title, slug)
 */
export async function usePayloadCategories() {
  const data = await usePayloadQuery<any>(categoriesQuery)
  return data.Categories?.docs || []
}
