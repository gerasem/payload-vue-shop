import productsByCategoryQuery from '@/graphql/productsByCategory.graphql?raw'
import type { ProductsByCategoryQuery } from '@/generated/graphql'

/**
 * Fetch products by category ID
 */
export async function usePayloadProducts(categoryId: string) {
  const data = await usePayloadQuery<ProductsByCategoryQuery>(productsByCategoryQuery, {
    categoryId
  })

  return {
    products: data.Products?.docs || [],
    totalDocs: data.Products?.totalDocs || 0
  }
}
