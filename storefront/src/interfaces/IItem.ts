import type { ProductsByCategoryQuery } from '@/generated/graphql'

export interface IItemGrouped {
  category: {
    slug: string
    title: string
  }
  products: IItem[]
}

export type IItem = NonNullable<NonNullable<ProductsByCategoryQuery['Products']>['docs']>[number]
export type IItemsByCategory = NonNullable<ProductsByCategoryQuery['Products']>
