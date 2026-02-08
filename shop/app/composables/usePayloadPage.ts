import pageQuery from '@/graphql/page.graphql?raw'
import type { PageQuery } from '@/generated/graphql'

/**
 * Fetch page data from Payload CMS by slug
 * Returns page with content, layout blocks and metadata
 */
export async function usePayloadPage(slug: string) {
  const data = await usePayloadQuery<PageQuery>(pageQuery, {
    slug
  })
  return data.Pages?.docs?.[0] || null
}
