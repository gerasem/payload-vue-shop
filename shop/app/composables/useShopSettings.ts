import shopSettingsQuery from '@/graphql/shopSettings.graphql?raw'
import type { ShopSettingsQuery } from '@/generated/graphql'

/**
 * Fetch global shop settings
 * Includes category order
 */
export async function useShopSettings() {
  try {
    const data = await usePayloadQuery<ShopSettingsQuery>(shopSettingsQuery)
    console.log('useShopSettings raw data:', data)
    return data?.ShopSetting || null
  } catch (e) {
    console.error('useShopSettings error:', e)
    return null
  }
}
