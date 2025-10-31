import type { InformationBannerQuery } from '@/generated/graphql'

export type IInformationBanner = NonNullable<
  NonNullable<NonNullable<InformationBannerQuery['InformationBanner']>['items']>
>[number]
