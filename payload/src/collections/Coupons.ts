import type { CollectionConfig } from 'payload'

export const Coupons: CollectionConfig = {
  slug: 'coupons',
  admin: {
    group: 'Ecommerce',
    useAsTitle: 'code',
  },
  access: {
    // Making it public so we can query if a coupon exists and its percentage from the frontend
    read: () => true,
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
