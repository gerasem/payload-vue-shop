import type { CollectionConfig } from 'payload'
import { adminOnly } from '@/access/adminOnly'

export const Coupons: CollectionConfig = {
  slug: 'coupons',
  admin: {
    group: 'Ecommerce',
    useAsTitle: 'code',
  },
  access: {
    read: adminOnly,
  },
  fields: [
    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'The coupon code (e.g. 2OFF, SUMMER20). Will be saved as uppercase.',
      },
      hooks: {
        beforeValidate: [
          ({ value }) => {
            if (typeof value === 'string') {
              return value.toUpperCase()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'discountPercentage',
      type: 'number',
      required: true,
      min: 1,
      max: 100,
      admin: {
        description: 'Discount percentage (1-100).',
      },
    },
    {
      name: 'expirationDate',
      type: 'date',
      admin: {
        description: 'Optional expiration date. If empty, the coupon never expires.',
      },
    },
  ],
}
