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
  
  const categories = data.Categories?.docs || []
  const allProducts = data.Products?.docs || []
  
  // Group products by category
  const result: CategoryWithItems[] = categories.map((category) => {
    // Filter products that belong to this category
    const categoryProducts = allProducts.filter((product) => {
      const productCategories = product.categories
      
      if (!productCategories) return false
      
      // Based on GraphQL Playground verification: categories is a SINGLE object with id property
      // Not an array! Example: { id: 6, title: "Accessories" }
      if (Array.isArray(productCategories)) {
        // Fallback: handle if it's an array
        return productCategories.some((cat) => cat.id === category.id)
      }
      
      // Single category object
      return (productCategories as any).id === category.id
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
