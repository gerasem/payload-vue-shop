import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'icon',
      type: 'relationship',
      label: 'Logo',
      relationTo: 'svg-media',
      required: false,
    },
    {
      name: 'slogan',
      type: 'text',
      localized: true,
      required: false,
      label: {
        en: 'Slogan',
        de: 'Slogan',
      },
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
      maxRows: 4,
      required: true,
      localized: true,
    },
    {
      name: 'navButtons',
      type: 'array',
      label: 'Buttons',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 3,
      required: true,
      localized: true,
    },
  ],
}
