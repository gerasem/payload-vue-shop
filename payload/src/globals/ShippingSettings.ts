import type { GlobalConfig } from 'payload'

export const ShippingSettings: GlobalConfig = {
  slug: 'shipping-settings',
  label: 'Shipping Settings',
  admin: {
    group: 'Ecommerce',
  },
  access: {
    read: () => true, // Publicly readable for the frontend
  },
  fields: [
    {
      name: 'minimumOrderAmount',
      type: 'number',
      label: 'Minimum Order Amount for Free Shipping (in cents)',
      admin: {
        description:
          'Enter the amount in cents (e.g., 5000 for €50.00). Orders equal to or above this amount will get free shipping.',
      },
      defaultValue: 5000,
      required: true,
    },
    {
      name: 'shippingMethods',
      type: 'array',
      label: 'Shipping Methods',
      labels: {
        singular: 'Shipping Method',
        plural: 'Shipping Methods',
      },
      minRows: 1,
      admin: {
        description: 'Define the available shipping methods for the customer to choose from.',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Method Name',
              required: true,
            },
            {
              name: 'price',
              type: 'number',
              label: 'Price (in cents)',
              admin: {
                description: 'Enter the shipping cost in cents (e.g., 499 for €4.99).',
              },
              required: true,
            },
            {
              name: 'isDefault',
              type: 'checkbox',
              label: 'Default Method',
              defaultValue: false,
              admin: {
                description:
                  'Set this to true if this should be the pre-selected method in checkout.',
              },
            },
          ],
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description (optional)',
          admin: {
            description:
              'A short explanation or estimated delivery time (e.g., "2-4 working days").',
          },
        },
      ],
    },
  ],
}
