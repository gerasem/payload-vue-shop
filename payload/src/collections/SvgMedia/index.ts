import type { CollectionConfig } from 'payload'
import { getSvgContent } from './hooks/getSvgContent'

export const SvgMedia: CollectionConfig = {
  slug: 'svg-media',
  admin: {
    defaultColumns: ['filename', 'updatedAt'],
    useAsTitle: 'filename',
  },
  upload: {
    mimeTypes: ['image/svg+xml'],
    disableLocalStorage: false,
  },
  fields: [
    {
      name: 'svgContent',
      type: 'textarea',
      admin: {
        hidden: true,
      },
    },
  ],
  hooks: {
    afterRead: [getSvgContent],
  },
}
