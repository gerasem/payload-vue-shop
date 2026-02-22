import type { GlobalConfig } from 'payload'

export const ShoppingSettings: GlobalConfig = {
  slug: 'shopping-settings',
  label: 'Shopping Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
      label: 'Favicon',
      admin: {
        description: 'Upload a favicon (.ico, .png, .svg) for the website. Recommended size: 32x32px or 64x64px.',
      },
    },
  ],
}
