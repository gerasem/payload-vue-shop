/**
 * Type definitions for the shop application
 * Based on GraphQL generated types
 */

import type { 
  ProductsByCategoryQuery,
  CategoriesQuery,
  PageQuery 
} from '@/generated/graphql'

/**
 * Item (Product) type alias
 * Extracted from ProductsByCategoryQuery for convenience
 */
export type IItem = NonNullable<
  NonNullable<ProductsByCategoryQuery['Products']>['docs'][number]
>

/**
 * Category type alias
 * Extracted from CategoriesQuery for convenience
 */
export type ICategory = NonNullable<
  NonNullable<CategoriesQuery['Categories']>['docs'][number]
>

/**
 * Page type alias
 * Extracted from PageQuery for convenience
 */
export type IPage = NonNullable<PageQuery['Pages']>
