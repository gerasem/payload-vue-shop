import shoppingSettingsQuery from '@/graphql/shoppingSettings.graphql?raw'
import type { ShoppingSettingsQuery } from '@/generated/graphql'

/**
 * Fetch global shopping settings (e.g. dynamic favicon)
 */
export async function useShoppingSettings() {
  try {
    const data = await usePayloadQuery<ShoppingSettingsQuery>(shoppingSettingsQuery)
    return data?.ShoppingSetting || null
  } catch (e) {
    console.error('useShoppingSettings error:', e)
    return null
  }
}
