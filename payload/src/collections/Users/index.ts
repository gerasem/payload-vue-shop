import type { CollectionConfig } from 'payload'

import { adminOnly } from '@/access/adminOnly'
import { adminOnlyFieldAccess } from '@/access/adminOnlyFieldAccess'
import { publicAccess } from '@/access/publicAccess'
import { adminOrSelf } from '@/access/adminOrSelf'
import { checkRole } from '@/access/utilities'

import { ensureFirstUserIsAdmin } from './hooks/ensureFirstUserIsAdmin'

const sendWelcomeEmail: any = async ({ doc, operation, req }: any) => {
  if (operation === 'create' && doc.email) {
    try {
      await req.payload.sendEmail({
        to: doc.email,
        subject: 'Welcome to our shop!',
        html: `<h1>Welcome!</h1><p>Thank you for registering an account with us.</p>`,
      })
    } catch (err: unknown) {
      req.payload.logger.error({ err, msg: 'Error sending welcome email' })
    }
  }
  return doc
}

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: ({ req: { user } }) => checkRole(['admin'], user),
    create: publicAccess,
    delete: adminOnly,
    read: adminOrSelf,
    update: adminOrSelf,
  },
  admin: {
    group: 'Users',
    defaultColumns: ['name', 'email', 'roles'],
    useAsTitle: 'name',
  },
  hooks: {
    afterChange: [sendWelcomeEmail],
  },
  auth: {
    tokenExpiration: 1209600,
    useAPIKey: true,
    // Brute-force protection: lock account after 5 failed login attempts for 10 minutes
    maxLoginAttempts: 5,
    lockTime: 600 * 1000, // 10 minutes in ms
    // Temporarily disabled since no email provider is configured
    verify: false,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: false, // Changed to false to fix migration error
    },
    {
      name: 'roles',
      type: 'select',
      access: {
        create: adminOnlyFieldAccess,
        read: adminOnlyFieldAccess,
        update: adminOnlyFieldAccess,
      },
      defaultValue: ['customer'],
      hasMany: true,
      hooks: {
        beforeChange: [ensureFirstUserIsAdmin],
      },
      options: [
        {
          label: 'admin',
          value: 'admin',
        },
        {
          label: 'customer',
          value: 'customer',
        },
      ],
    },
    {
      name: 'orders',
      type: 'join',
      collection: 'orders',
      on: 'customer',
      admin: {
        allowCreate: false,
        defaultColumns: ['id', 'createdAt', 'total', 'currency', 'items'],
      },
    },
    {
      name: 'cart',
      type: 'join',
      collection: 'carts',
      on: 'customer',
      admin: {
        allowCreate: false,
        defaultColumns: ['id', 'createdAt', 'total', 'currency', 'items'],
      },
    },
    {
      name: 'addresses',
      type: 'join',
      collection: 'addresses',
      on: 'customer',
      admin: {
        allowCreate: false,
        defaultColumns: ['id'],
      },
    },
  ],
}
