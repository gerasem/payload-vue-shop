import categoriesQuery from '@/graphql/categories.graphql?raw'
import type { CategoriesQuery } from '@/generated/graphql'

/**
 * Fetch categories for navigation bar
 * Returns minimal category data (id, title, slug)
 */
export async function usePayloadCategories() {
  const [data, settings] = await Promise.all([
    usePayloadQuery<CategoriesQuery>(categoriesQuery),
    useShopSettings()
  ])

  const orderedCategories = settings?.categoryOrder || []
  const categories = data?.Categories?.docs || []

  console.log('usePayloadCategories: settings fetched', settings)

  if (orderedCategories.length === 0) {
    console.log('usePayloadCategories: No order defined, returning all')
    return categories
  }

  const categoryMap = new Map(categories.map(c => [c.id, c]))
  const result: any[] = []
  const processedIds = new Set<string | number>()

  // 1. Add ordered categories
  orderedCategories.forEach((item: any) => {
    // The structure is now { category: { id, ... }, id: ... } due to array field
    const categoryData = item.category
    if (!categoryData) return

    const fullCategory = categoryMap.get(categoryData.id)
    if (fullCategory) {
      result.push(fullCategory)
      processedIds.add(fullCategory.id)
    }
  })

  // 2. Add remaining categories
  categories.forEach(category => {
    if (!processedIds.has(category.id)) {
      result.push(category)
    }
  })

  return result
}
