import type { Config } from '@payload-types/payload-types'
import { PayloadSDK } from '@payloadcms/sdk'

let BACKEND_URL = 'http://localhost:3000/api'

if (import.meta.env.VITE_BACKEND_URL) {
  BACKEND_URL = import.meta.env.VITE_BACKEND_URL
}

export const sdk = new PayloadSDK<Config>({
  baseURL: BACKEND_URL,
  baseInit: { credentials: 'include' },
})
