/**
 * Format price in cents to EUR string in German format
 * @param cents - Price in cents
 * @returns Formatted price string (e.g., "19,99 €")
 */
export function formatEuro(cents: number | null | undefined): string {
  if (cents === null || cents === undefined) return '—'
  
  const euroFormatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  
  return euroFormatter.format(cents / 100)
}
