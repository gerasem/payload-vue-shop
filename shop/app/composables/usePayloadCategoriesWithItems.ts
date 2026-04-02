import categoriesWithItemsQuery from '@/graphql/categoriesWithItems.graphql?raw'
import type { CategoriesWithItemsQuery } from '@/generated/graphql'
import homeCategoryProductsQuery from '@/graphql/homeCategoryProducts.graphql?raw'
import type { HomeCategoryProductsQuery } from '@/generated/graphql'
import type { ICategory, IItem } from '@/types'

export interface CategoryWithItems {
  category: ICategory
  items: IItem[]
}

/**
 * Fetch all categories with their items (limited to 4 per category)
 * Returns array of categories with up to 4 items each
 * Optimized to use highlighted products from settings and only fetch fallbacks if needed
 */
export async function usePayloadCategoriesWithItems(itemsPerCategory = 4) {
  // 1. Fetch Categories and Shop Settings (contains curated product lists)
  const [data, settings] = await Promise.all([
    usePayloadQuery<CategoriesWithItemsQuery>(categoriesWithItemsQuery),
    useShopSettings()
  ])

  if (!data?.Categories?.docs) return []

  const categories = data.Categories.docs as ICategory[]
  const categoryMap = new Map(categories.map(c => [c.id, c]))
  const orderedCategories = settings?.categoryOrder || []

  // Track which categories are already processed to avoid duplicates
  const processedIds = new Set<string | number>()
  const result: CategoryWithItems[] = []

  // Helper to fetch fallback products for a category
  const fetchFallbackProducts = async (category: ICategory): Promise<IItem[]> => {
    const productsData = await usePayloadQuery<HomeCategoryProductsQuery>(
      homeCategoryProductsQuery,
      {
        categoryId: category.id
      }
    )
    return (productsData?.Products?.docs || []) as IItem[]
  }

  // 1. Process ordered categories first (they may have highlighted products)
  const orderedResults = await Promise.all(
    orderedCategories.map(async item => {
      const categoryId = item.category?.id
      if (!categoryId) return null

      const fullCategory = categoryMap.get(categoryId)
      if (!fullCategory) return null

      processedIds.add(categoryId)

      // Use manually selected products if available
      if (item.highlightedProducts && item.highlightedProducts.length > 0) {
        return {
          category: fullCategory,
          items: item.highlightedProducts as IItem[]
        }
      }

      // Otherwise fetch fallback products (first 4)
      const items = await fetchFallbackProducts(fullCategory)
      return { category: fullCategory, items }
    })
  )

  // Add non-null ordered results
  orderedResults.forEach(r => {
    if (r) result.push(r)
  })

  // 2. Process remaining categories that weren't in the explicit order
  const remainingResults = await Promise.all(
    categories
      .filter(c => !processedIds.has(c.id))
      .map(async category => {
        const items = await fetchFallbackProducts(category)
        return { category, items }
      })
  )

  result.push(...remainingResults)

  return result
}
