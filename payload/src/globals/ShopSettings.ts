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
        {
          name: 'highlightedProducts',
          type: 'relationship',
          relationTo: 'products',
          hasMany: true,
          label: 'Highlighted Products',
          filterOptions: ({ siblingData }) => {
            return {
              categories: {
                equals: siblingData?.category,
              },
            }
          },
          admin: {
            description: 'Select products to display for this category. If empty, standard logic applies.',
          },
        },
      ],

    },
  ],
}
