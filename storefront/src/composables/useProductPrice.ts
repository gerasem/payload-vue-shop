import { convertToLocale, getPercentageDiff } from '@/utils/priceUtils'
import type { HttpTypes } from '@medusajs/types'

interface VariantPrice {
  calculated_price_number: number
  calculated_price: string
  original_price_number: number
  original_price: string
  currency_code: string
  price_type: string | null
  percentage_diff: string
}

export function useProductPrice() {
  const getPricesForVariant = (
    variant: HttpTypes.StoreProductVariant | undefined,
  ): VariantPrice | null => {
    if (!variant?.calculated_price?.calculated_amount) {
      return null
    }

    return {
      calculated_price_number: variant.calculated_price.calculated_amount,
      calculated_price: convertToLocale({
        amount: variant.calculated_price.calculated_amount,
      }),
      original_price_number: variant.calculated_price.original_amount || 0,
      original_price: convertToLocale({
        amount: variant.calculated_price.original_amount || 0,
      }),
      currency_code: 'EUR',
      price_type: variant?.calculated_price?.calculated_price?.price_list_type || null,
      percentage_diff: getPercentageDiff(
        variant.calculated_price.original_amount || 0,
        variant.calculated_price.calculated_amount,
      ),
    }
  }

  const getProductPrice = ({
    product,
    variantId,
  }: {
    product: HttpTypes.StoreProduct
    variantId?: string
  }): {
    product: HttpTypes.StoreProduct
    cheapestPrice: VariantPrice | null
    variantPrice: VariantPrice | null
  } => {
    if (!product || !product.id) {
      throw new Error('No product provided')
    }

    const cheapestPrice = (): VariantPrice | null => {
      //console.log('product', product)
      if (!product.variants?.length) {
        return null
      }

      const cheapestVariant = product.variants
        .filter((v) => !!v.calculated_price)
        .sort(
          (a, b) => a.calculated_price.calculated_amount - b.calculated_price.calculated_amount,
        )[0]

      return getPricesForVariant(cheapestVariant)
    }

    const variantPrice = (): VariantPrice | null => {
      if (!variantId) {
        return null
      }

      const variant = product.variants?.find((v) => v.id === variantId || v.sku === variantId)
      if (!variant) {
        return null
      }

      return getPricesForVariant(variant)
    }

    return {
      product,
      cheapestPrice: cheapestPrice(),
      variantPrice: variantPrice(),
    }
  }

  return { getPricesForVariant, getProductPrice }
}
