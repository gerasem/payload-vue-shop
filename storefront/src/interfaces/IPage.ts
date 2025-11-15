import type { PageBySlugQuery } from '@/generated/graphql'

export type IPage = NonNullable<NonNullable<PageBySlugQuery['Pages']>['docs']>[number]
