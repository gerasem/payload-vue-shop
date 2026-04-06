import type { Access } from 'payload'

import { checkRole } from '@/access/utilities'

export const adminOrCustomerOwner: Access = ({ req, data }) => {
  const user = req?.user
  const query = req?.query

  if (user && checkRole(['admin'], user)) {
    return true
  }

  const or: any[] = []

  if (user?.id) {
    or.push({
      customer: {
        equals: user.id,
      },
    })
  }

  // Allow access for guest carts/orders via secret
  // We check for secret in the request body (data) or query parameters (req.query)
  // Payload 3.0 passes 'data' to update access functions
  const secret = (data as any)?.secret || (query as any)?.secret
  if (secret) {
    or.push({
      secret: {
        equals: secret,
      },
    })
  }

  if (or.length > 0) {
    return {
      or,
    }
  }

  return false
}
