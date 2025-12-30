import informationBannerQuery from '@/graphql/informationBanner.graphql?raw'
import type { InformationBannerQuery } from '@/generated/graphql'

/**
 * Fetch information banner data from Payload CMS
 * Returns banner items with text and icons
 */
export async function usePayloadInformationBanner() {
  const data = await usePayloadQuery<InformationBannerQuery>(informationBannerQuery)
  return data.InformationBanner
}
