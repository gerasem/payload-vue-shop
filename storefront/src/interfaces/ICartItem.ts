export interface ICartItemLS {
  variantId: number | null // null — product has no variants
  productId: number
  qty: number
}

export interface ICartItem {
  variantId: number | null
  productId: number
  qty: number
  priceInEUR: number
  title: string
  image?: string
  slug: string
  hasVariant: boolean
  variantTitle?: string
  inventory: number | null
}
