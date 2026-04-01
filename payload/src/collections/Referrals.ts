import type { CollectionConfig } from 'payload'

export const Referrals: CollectionConfig = {
  slug: 'referrals',
  admin: {
    group: 'Ecommerce',
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'The referral identifier (e.g. partner name or code).',
      },
    },
  ],
}
