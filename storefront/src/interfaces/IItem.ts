import type { AllProductsQuery } from '@/generated/graphql'

export interface IItemGrouped {
  category: {
    slug: string
    title: string
  }
  products: IItem[]
}

export type IItem = NonNullable<NonNullable<AllProductsQuery['Products']>['docs']>[number]
