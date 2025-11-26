import type { AllProductsQuery } from '@/generated/graphql'

export interface IItemGrouped {
  category: {
    slug: string
    title: string
  }
  products: IItem[]
}

type BaseItem = NonNullable<NonNullable<AllProductsQuery['Products']>['docs']>[number]

export interface IItem extends BaseItem {
  __isFresh?: boolean | null
}
