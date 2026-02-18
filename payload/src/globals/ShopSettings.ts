import type { GlobalConfig } from 'payload'

export const ShopSettings: GlobalConfig = {
  slug: 'shop-settings',
  label: 'Shop Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'categoryOrder',
      type: 'array',
      label: 'Category Order',
      labels: {
        singular: 'Category',
        plural: 'Categories',
      },
      fields: [
        {
          name: 'category',
          type: 'relationship',
          relationTo: 'categories',
          required: true,
        },
      ],

    },
  ],
}
