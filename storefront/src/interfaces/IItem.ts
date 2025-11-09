import type { ProductsByCategoryIdQuery } from '@/generated/graphql'

export interface IItemGrouped {
  category: string
  products: IItem[]
}

export type IItem = NonNullable<NonNullable<ProductsByCategoryIdQuery['Products']>['docs']>[number]
