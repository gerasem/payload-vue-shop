import productsByCategoryQuery from '@/graphql/productsByCategory.graphql?raw'

/**
 * Fetch products by category ID
 */
export async function usePayloadProducts(categoryId: string) {
  const data = await usePayloadQuery<any>(productsByCategoryQuery, {
    categoryId
  })

  return {
    products: data.Products?.docs || [],
    totalDocs: data.Products?.totalDocs || 0
  }
}
