import type { CategoriesQuery } from '@/generated/graphql'

export type ICategory = NonNullable<NonNullable<CategoriesQuery['Categories']>['docs']>[number]
