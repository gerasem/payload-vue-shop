import type { CollectionConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Media: CollectionConfig = {
  admin: {
    group: 'Content',
    useAsTitle: 'filename',
  },
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    // staticDir: path.resolve(dirname, '../../public/media'),
    adminThumbnail: 'thumbnail',
    formatOptions: {
      format: 'webp',
      options: {
        quality: 95,
      },
    },
    imageSizes: [
      {
        name: 'categoryPreview',
        width: 320,
        height: 180,
        fit: 'cover',
        position: 'centre',
        withoutEnlargement: true,
        formatOptions: {
          format: 'webp',
          options: {
            quality: 95,
          },
        },
      },
      {
        name: 'thumbnail',
        width: 400,
        height: 400,
        fit: 'cover',
        position: 'centre',
        withoutEnlargement: true,
        formatOptions: {
          format: 'webp',
          options: {
            quality: 95,
          },
        },
      },
    ],
  },
}
