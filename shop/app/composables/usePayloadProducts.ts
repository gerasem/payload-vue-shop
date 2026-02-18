import productsByCategoryQuery from '@/graphql/productsByCategory.graphql?raw'
import type { ProductsByCategoryQuery } from '@/generated/graphql'

/**
 * Fetch products by category ID
 */
export async function usePayloadProducts(
  categoryId: string,
  sort: string = 'popularity',
  priceRange: [number, number] | null = null
) {
  const data = await usePayloadQuery<ProductsByCategoryQuery>(productsByCategoryQuery, {
    categoryId,
    minPrice: priceRange?.[0],
    maxPrice: priceRange?.[1],
    sort: sort === 'popularity' ? undefined : sort
  })

  return {
    products: data?.Products?.docs || [],
    totalDocs: data?.Products?.totalDocs || 0
  }
}
