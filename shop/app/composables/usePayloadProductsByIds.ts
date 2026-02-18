import productByIdQuery from '@/graphql/productById.graphql?raw'
import type { ProductByIdQuery } from '@/generated/graphql'
import type { IProductFull } from '@/types'

/**
 * Fetch multiple products by their IDs
 * Uses parallel requests since 'in' operator is not supported for IDs
 */
export async function usePayloadProductsByIds(ids: number[]): Promise<Map<number, IProductFull>> {
  if (!ids.length) return new Map()

  const map = new Map<number, IProductFull>()

  // Run requests in parallel
  await Promise.all(
    ids.map(async id => {
      try {
        const data = await usePayloadQuery<ProductByIdQuery>(productByIdQuery, { id })
        const product = data?.Products?.docs?.[0]
        if (product) {
          map.set(id, product as IProductFull)
        }
      } catch (e) {
        console.error(`Failed to fetch product ${id}`, e)
      }
    })
  )

  return map
}
