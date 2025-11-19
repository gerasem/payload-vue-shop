import type { IItem } from '@/interfaces/IItem'

export const getPercentageDiff = (original: number, calculated: number): string => {
  //   const diff = original - calculated
  //   const decrease = (diff / original) * 100
  //   return decrease.toFixed()
  return '0'
}

export const convertToLocale = ({ amount }: { amount: number }): string => {
  return '0'
  //   const formatted = new Intl.NumberFormat('de-DE', {
  //     style: 'currency',
  //     currency: 'EUR',
  //   }).format(amount)

  //   return formatted.replace(/\./g, '')
}

const euroFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export function formatEuro(cents: number | null | undefined): string {
  if (cents === null || cents === undefined) return '—'
  return euroFormatter.format(cents / 100)
}

export function getMinPriceInCents(product: IItem | null | undefined): number | null {
  if (!product) return null

  const prices: number[] = []

  if (product.priceInEUR != null) {
    prices.push(product.priceInEUR)
  }

  if (product.enableVariants && product.variants) {
    for (const variant of product.variants.docs) {
      if (variant?.priceInEUR != null) {
        prices.push(variant.priceInEUR)
      }
    }
  }

  return prices.length > 0 ? Math.min(...prices) : null
}

export function getMinPriceFormatted(product: IItem | null | undefined): string {
  const minPriceCents = getMinPriceInCents(product)
  if (minPriceCents === null) return '—'

  return formatEuro(minPriceCents)
}

export function areAllPricesEqual(product: IItem | null | undefined): boolean {
  if (!product) return false

  const prices: number[] = []

  if (product.priceInEUR != null) {
    prices.push(product.priceInEUR)
  }

  if (product.enableVariants && product.variants?.docs) {
    for (const variant of product.variants.docs) {
      if (variant?.priceInEUR != null) {
        prices.push(variant.priceInEUR)
      }
    }
  }

  if (prices.length === 0) return true // или false — решай сам

  return prices.every((price) => price === prices[0])
}
