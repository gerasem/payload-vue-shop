/**
 * Type definitions for the shop application
 * Based on GraphQL generated types
 */

import type { ProductsByCategoryQuery, CategoriesQuery, PageQuery } from '@/generated/graphql'

/**
 * Item (Product) type alias
 * Extracted from ProductsByCategoryQuery for convenience
 */
export type IItem = NonNullable<NonNullable<ProductsByCategoryQuery['Products']>['docs'][number]>

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
