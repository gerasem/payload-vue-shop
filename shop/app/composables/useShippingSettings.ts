import shippingSettingsQuery from '@/graphql/shippingSettings.graphql?raw'
import type { ShippingSettingsQuery } from '@/generated/graphql'

/**
 * Fetch global shipping settings (methods, minimum order amount, etc.)
 */
export async function useShippingSettings() {
  try {
    const data = await usePayloadQuery<ShippingSettingsQuery>(shippingSettingsQuery)
    return data?.ShippingSetting || null
  } catch (e) {
    console.error('useShippingSettings error:', e)
    return null
  }
}
