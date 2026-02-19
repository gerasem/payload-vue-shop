import type { UseFetchOptions } from 'nuxt/app'

/**
 * Wrapper around useFetch for Payload CMS API calls
 * Automatically handles Base URL, credentials, and headers
 */
export async function usePayloadFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig()
  const { $i18n } = useNuxtApp()
  const headers = useRequestHeaders(['cookie'])

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.payloadUrl as string,
    credentials: 'include',
    headers: {
      ...headers,
      ...(options.headers || {})
    }
  }

  // Merge defaults with options
  // deep merge is better but native spread is often enough for simple cases
  // useFetch options are complex, so we pass defaults
  return await useFetch<T>(url, {
    ...(defaults as any),
    ...options
  })
}

/**
 * Wrapper around $fetch for Payload CMS API calls (non-reactive)
 * Useful for actions like form submissions, login, etc.
 */
export async function $payloadFetch<T>(url: string, options: any = {}) {
  const config = useRuntimeConfig()
  const headers = useRequestHeaders(['cookie'])

  const defaults = {
    baseURL: config.public.payloadUrl as string,
    credentials: 'include',
    headers: {
      ...headers,
      ...(options.headers || {})
    }
  }

  return await $fetch<T>(url, {
    ...defaults,
    ...options
  })
}
