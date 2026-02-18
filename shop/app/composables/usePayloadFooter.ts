import footerQuery from '@/graphql/footer.graphql?raw'
import type { FooterQuery } from '@/generated/graphql'

/**
 * Fetch footer data from Payload CMS
 * Returns footer with navigation, contact and social links
 */
export async function usePayloadFooter() {
  const data = await usePayloadQuery<FooterQuery>(footerQuery)
  return data?.Footer || null
}
