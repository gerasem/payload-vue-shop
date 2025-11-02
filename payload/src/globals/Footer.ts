import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slogan',
      type: 'text',
      label: 'Slogan in Footer',
      maxLength: 100,
      localized: true,
    },

    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
      localized: true,
    },

    {
      name: 'contactLink',
      type: 'group',
      label: 'Contact Link',
      fields: [
        link({
          appearances: false,
        }),
      ],
      localized: true,
    },

    {
      name: 'socialLink',
      type: 'group',
      label: 'Sozial Link',
      fields: [
        link({
          appearances: false,
        }),
      ],
      localized: true,
    },

    {
      name: 'navItems',
      type: 'array',
      label: 'Links',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      localized: true,
    },
  ],
}
