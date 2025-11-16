import type { CategoriesQuery } from '@/generated/graphql'

export type ICategory = NonNullable<NonNullable<CategoriesQuery['Categories']>['docs']>[number]

export type ICategoryShort = {
  id: number
  slug: string
  title?: string | null | undefined
} | null | undefined
