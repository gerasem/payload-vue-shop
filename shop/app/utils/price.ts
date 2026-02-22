/**
 * Minimal product shape accepted by price utilities.
 * Works with both IItem (list query) and IProductFull (detail query).
 */
interface ProductLike {
  priceInEUR?: number | null
  enableVariants?: boolean | null
  variants?: { docs: Array<{ priceInEUR?: number | null } | null> } | null
}

/**
 * Format cents to EUR in German locale
 */
const euroFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

export function formatEuro(cents: number | null | undefined): string {
  if (cents === null || cents === undefined) return '—'
  // Node 18+ uses narrow no-break space (U+202F) for German locale,
  // some browsers still use regular no-break space (U+00A0).
  // Replace narrow no-break space with regular no-break space to prevent hydration mismatches.
  return euroFormatter.format(cents / 100).replace(/\u202f/g, '\u00a0')
}

/**
 * Get minimum price from product and its variants (in cents)
 */
export function getMinPriceInCents(product: ProductLike | null | undefined): number | null {
  if (!product) return null

  const prices: number[] = []

  // Add base product price
  if (product.priceInEUR != null) {
    prices.push(product.priceInEUR)
  }

  // Add variant prices
  if (product.enableVariants && product.variants?.docs) {
    for (const variant of product.variants.docs) {
      if (variant?.priceInEUR != null) {
        prices.push(variant.priceInEUR)
      }
    }
  }

  return prices.length > 0 ? Math.min(...prices) : null
}

/**
 * Get formatted minimum price
 */
export function getMinPriceFormatted(product: ProductLike | null | undefined): string {
  const minPriceCents = getMinPriceInCents(product)
  if (minPriceCents === null) return '—'

  return formatEuro(minPriceCents)
}

/**
 * Check if all prices (product + variants) are equal
 */
export function areAllPricesEqual(product: ProductLike | null | undefined): boolean {
  if (!product) return false

  const prices: number[] = []

  // Collect all prices
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

  if (prices.length === 0) return true

  // Check if all prices are the same
  return prices.every(price => price === prices[0])
}
