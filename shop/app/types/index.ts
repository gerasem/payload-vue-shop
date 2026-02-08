import type {
  ProductsByCategoryQuery,
  CategoriesQuery,
  PageQuery,
  ItemBySlugQuery
} from '@/generated/graphql'

/**
 * Item (Product) type alias
 * Extracted from ProductsByCategoryQuery for convenience
 * Used in lists and grids
 */
export type IItem = NonNullable<NonNullable<ProductsByCategoryQuery['Products']>['docs'][number]>

/**
 * Full Product type alias
 * Extracted from ItemBySlugQuery
 * Used in single product page
 */
export type IProductFull = NonNullable<NonNullable<ItemBySlugQuery['Products']>['docs'][number]>

/**
 * Category type alias
 * Extracted from CategoriesQuery for convenience
 */
export type ICategory = NonNullable<NonNullable<CategoriesQuery['Categories']>['docs'][number]>

/**
 * Page type alias
 * Extracted from PageQuery for convenience
 */
export type IPage = NonNullable<PageQuery['Pages']>

/**
 * Cart Item (Raw) - minimal data stored in localStorage
 */
export interface ICartItemRaw {
  productId: number
  variantId: number | null
  qty: number
}

/**
 * Cart Item (Hydrated) - enriched with product data
 * Includes inventory: null/undefined = unlimited, 0 = out of stock, >0 = available
 */
export interface ICartItem extends ICartItemRaw {
  title: string
  slug: string
  priceInEUR: number
  image?: string
  variantTitle?: string
  inventory: number | null | undefined
}
