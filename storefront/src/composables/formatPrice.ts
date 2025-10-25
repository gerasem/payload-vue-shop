const convertToDecimal = (amount: number) => {
  return Math.floor(amount) / 100
}

export const formatePrice = (price: number) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(convertToDecimal(price))
}
