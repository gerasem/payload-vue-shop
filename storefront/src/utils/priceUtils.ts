export const getPercentageDiff = (original: number, calculated: number): string => {
  const diff = original - calculated
  const decrease = (diff / original) * 100
  return decrease.toFixed()
}

export const convertToLocale = ({ amount }: { amount: number }): string => {
  const formatted = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount)

  return formatted.replace(/\./g, '')
}
