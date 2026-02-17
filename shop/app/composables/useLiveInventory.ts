import productInventoryQuery from '@/graphql/productInventory.graphql?raw'
import type { ProductInventoryQuery } from '@/generated/graphql'

/**
 * Fetch live inventory from the server (always fresh, no caching).
 * Returns null if unlimited, or a number.
 */
export async function useLiveInventory(
  productId: number,
  variantId?: number | null
): Promise<number | null> {
  if (!productId) return null

  try {
    const result = await usePayloadQuery<ProductInventoryQuery>(productInventoryQuery, {
      id: productId
    })

    const product = result.Products?.docs?.[0]
    if (!product) return null

    if (variantId) {
      const variant = product.variants?.docs?.find((v: any) => v.id === variantId)
      return variant?.inventory ?? null
    }

    return product.inventory ?? null
  } catch (e) {
    console.error('Failed to fetch live inventory:', e)
    return null
  }
}
