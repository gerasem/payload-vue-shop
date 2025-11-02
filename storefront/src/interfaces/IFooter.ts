import type { FooterQuery } from '@/generated/graphql'

export type IFooter = NonNullable<FooterQuery['Footer']>

export type IFooterLink = NonNullable<NonNullable<IFooter['navItems']>[number]>
