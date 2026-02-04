import productByIdQuery from '@/graphql/productById.graphql?raw'
import type { ProductByIdQuery } from '@/generated/graphql'

/**
 * Fetch live inventory from server
 * Returns null if unlimited, or number
 */
export async function useLiveInventory(productId: number, variantId?: number | null): Promise<number | null> {
  if (!productId) return null

  try {
    const { data } = await useAsyncData(`inventory-${productId}-${variantId || 'base'}`, async () => {
      const result = await usePayloadQuery<ProductByIdQuery>(productByIdQuery, { id: productId })
      return result
    })
    
    // If used on client side after initial load, we might need to refresh or just use usePayloadQuery directly without useAsyncData caching
    // But since this is a specific action, let's use usePayloadQuery directly to ensure fresh data
    const result = await usePayloadQuery<ProductByIdQuery>(productByIdQuery, { id: productId })
    
    const product = result.Products?.docs?.[0]
    if (!product) return null

    if (variantId) {
      const variant = product.variants?.docs?.find((v: any) => v.id === variantId)
      return variant?.inventory ?? null
    }

    return product.inventory ?? null
  } catch (e) {
    console.error('Failed to fetch inventory', e)
    return null
  }
}
