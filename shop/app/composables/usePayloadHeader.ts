import headerQuery from '@/graphql/header.graphql?raw'
import type { HeaderQuery } from '@/generated/graphql'

/**
 * Fetch header data from Payload CMS
 * Returns header global with logo, slogan, navigation items
 */
export async function usePayloadHeader() {
  const data = await usePayloadQuery<HeaderQuery>(headerQuery)
  return data.Header
}
