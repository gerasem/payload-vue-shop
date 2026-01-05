import itemBySlugQuery from '@/graphql/itemBySlug.graphql?raw'
import type { ItemBySlugQuery } from '@/generated/graphql'
import type { IItem } from '@/types'

/**
 * Fetch product by slug with full details including variants and inventory
 */
export async function usePayloadItemBySlug(slug: string): Promise<IItem | null> {
  const data = await usePayloadQuery<ItemBySlugQuery>(itemBySlugQuery, {
    slug
  })
  
  const product = data.Products?.docs?.[0]
  
  return product ? (product as IItem) : null
}
