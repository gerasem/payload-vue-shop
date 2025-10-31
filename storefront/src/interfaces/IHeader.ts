import type { HeaderQuery } from '@/generated/graphql'

export type IHeader = NonNullable<HeaderQuery['Header']>

export type IHeaderIcon = NonNullable<IHeader['icon']>

export type IHeaderLink = NonNullable<NonNullable<IHeader['navItems']>[number]>

export type IHeaderButton = NonNullable<NonNullable<IHeader['navButtons']>[number]>
