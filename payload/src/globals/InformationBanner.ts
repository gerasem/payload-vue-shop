import type { GlobalConfig } from 'payload'

export const InformationBanner: GlobalConfig = {
  slug: 'information-banner',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Banner Items',
      maxRows: 4,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
          required: true,
          localized: true,
        },
        {
          name: 'icon',
          type: 'relationship',
          label: 'SVG Icon',
          relationTo: 'svg-media',
          required: false,
        },
      ],
    },
  ],
}
