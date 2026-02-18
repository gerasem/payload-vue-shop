import categoriesWithItemsQuery from '@/graphql/categoriesWithItems.graphql?raw'
import type { CategoriesWithItemsQuery } from '@/generated/graphql'
import type { ICategory, IItem } from '@/types'

export interface CategoryWithItems {
  category: ICategory
  items: IItem[]
}

/**
 * Fetch all categories with their items (limited to 4 per category)
 * Returns array of categories with up to 4 items each
 */
export async function usePayloadCategoriesWithItems(itemsPerCategory = 4) {
  const [data, settings] = await Promise.all([
    usePayloadQuery<CategoriesWithItemsQuery>(categoriesWithItemsQuery),
    useShopSettings()
  ])
  
  const orderedCategories = settings?.categoryOrder || []

  if (!data) return []

  const categories = data.Categories?.docs || []
  const allProducts = data.Products?.docs || []

  // Create a map for quick access to categories
  const categoryMap = new Map(categories.map(c => [c.id, c]))

  // Helper to process a category
  const processCategory = (category: ICategory) => {
    // Filter products that belong to this category
    const categoryProducts = allProducts.filter(product => {
      const productCategories = product.categories
      if (!productCategories) return false

      // Normalize to array
      const cats = Array.isArray(productCategories) ? productCategories : [productCategories]
      return cats.some(cat => cat.id === category.id)
    })

    // Limit to specified number of items
    const limitedProducts = categoryProducts.slice(0, itemsPerCategory)

    return {
      category: category as ICategory,
      items: limitedProducts as IItem[]
    }
  }

  const result: CategoryWithItems[] = []
  const processedIds = new Set<string | number>()

  // 1. Process ordered categories first
  if (orderedCategories.length > 0) {
    orderedCategories.forEach((item: any) => {
      // The structure is now { category: { id, ... }, highlightedProducts: { docs: [...] } }
      const categoryData = item.category
      if (!categoryData) return

      const fullCategory = categoryMap.get(categoryData.id)
      
      // Check for manually selected products
      const manualProducts = item.highlightedProducts
      const hasManualProducts = manualProducts && manualProducts.length > 0

      if (fullCategory) {
        if (hasManualProducts) {
          // Use manual products
          result.push({
            category: fullCategory as ICategory,
            items: manualProducts as IItem[]
          })
        } else {
          // Fallback to auto-fetched products
          result.push(processCategory(fullCategory as ICategory))
        }
        processedIds.add(fullCategory.id)
      }
    })
  }

  // 2. Process remaining categories
  categories.forEach(category => {
    if (!processedIds.has(category.id)) {
      result.push(processCategory(category as ICategory))
    }
  })

  return result
}
