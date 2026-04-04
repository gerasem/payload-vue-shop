import type { GlobalConfig } from 'payload'

export const ShoppingSettings: GlobalConfig = {
  slug: 'shopping-settings',
  label: 'Settings',
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
    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
      localized: true,
    },
    {
      name: 'email',
      type: 'text',
      label: 'Contact Email',
      localized: true,
    },
  ],
}
