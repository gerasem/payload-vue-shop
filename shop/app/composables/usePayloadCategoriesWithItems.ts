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
  const data = await usePayloadQuery<CategoriesWithItemsQuery>(categoriesWithItemsQuery)

  if (!data) return []

  const categories = data.Categories?.docs || []
  const allProducts = data.Products?.docs || []

  // Group products by category
  const result: CategoryWithItems[] = categories.map(category => {
    // Filter products that belong to this category
    const categoryProducts = allProducts.filter(product => {
      const productCategories = product.categories
      if (!productCategories) return false

      // Normalize to array (GraphQL may return single object or array depending on depth)
      const cats = Array.isArray(productCategories) ? productCategories : [productCategories]
      return cats.some(cat => cat.id === category.id)
    })

    // Limit to specified number of items
    const limitedProducts = categoryProducts.slice(0, itemsPerCategory)

    return {
      category: category as ICategory,
      items: limitedProducts as IItem[]
    }
  })

  return result
}
