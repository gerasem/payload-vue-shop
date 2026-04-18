import type { IProductFull } from '@/types'

/**
 * Fetch multiple products by their IDs
 * Generates a dynamic GraphQL query with OR condition to fetch in a single request (fixes N+1)
 */
export async function usePayloadProductsByIds(ids: number[]): Promise<Map<number, IProductFull>> {
  if (!ids.length) return new Map()

  const map = new Map<number, IProductFull>()

  // Construct OR conditions for each ID.
  const orCondition = ids.map(id => `{ id: { equals: ${id} } }`).join(', ')

  // We dynamically build the query to bypass "in" limits on number fields.
  const dynamicQuery = `
    query ProductsByIds($locale: LocaleInputType!) {
      Products(locale: $locale, where: { OR: [ ${orCondition} ] }, limit: 100) {
        docs {
          id
          title
          slug
          priceInEUR
          inventory
          enableVariants
          gallery {
            id
            url
            thumbnailURL
          }
          variants {
            docs {
              id
              title
              priceInEUR
              inventory
            }
          }
        }
      }
    }
  `

  try {
    const data = await usePayloadQuery<any>(dynamicQuery)
    const docs = data?.Products?.docs || []

    for (const product of docs) {
      if (product && product.id) {
        map.set(product.id, product as IProductFull)
      }
    }
  } catch (e) {
    console.error('Failed to fetch multiple products by IDs', e)
  }

  return map
}
