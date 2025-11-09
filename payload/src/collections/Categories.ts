import { slugField } from 'payload'
import type { CollectionConfig } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    description: 'Categories',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },

    slugField({
      position: 'sidebar',
    }),

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      filterOptions: () => ({
        mimeType: { in: ['image/jpeg', 'image/png', 'image/webp'] },
      }),
    },

    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      required: false,
      localized: true,
    },
  ],
}
