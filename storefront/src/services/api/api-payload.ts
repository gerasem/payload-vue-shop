import { apolloClient } from '@/graphql/apollo-client'
import { useLoaderStore } from '@/stores/LoaderStore'
import { useToastStore } from '@/stores/ToastStore'
import type { DocumentNode } from 'graphql'

let locale: string = ''

if (typeof window !== 'undefined') {
  locale = localStorage.getItem('lang') || import.meta.env.VITE_DEFAULT_LOCALE || 'de'
} else {
  locale = import.meta.env.VITE_DEFAULT_LANGUAGE
}

export async function gqlRequest<T>(
  query: DocumentNode,
  variables: Record<string, any> = {},
  loaderKey?: string,
): Promise<T> {
  console.log('USE LANG From LS', locale)

  const finalVariables = {
    ...variables,
    locale,
  }

  return handleRequest(
    async () => {
      const { data } = await apolloClient.query({
        query,
        fetchPolicy: 'cache-first',
        variables: finalVariables,
      })

      return data
    },
    { loaderKey },
  )
}

async function handleRequest<T>(
  callback: () => Promise<T>,
  options: { loaderKey?: string },
): Promise<T> {
  const loaderStore = useLoaderStore()

  try {
    if (options.loaderKey) {
      loaderStore.startLoading(options.loaderKey)
    }
    return await callback()
  } catch (error: unknown) {
    const toastStore = useToastStore()

    if (error instanceof Error) {
      console.error('API Error:', error.message)
      toastStore.addError(
        'API Error',
        error.message,
        {
          label: 'Reload Page',
          onClick: () => window.location.reload(),
        },
        10000,
      )
    }

    throw error
  } finally {
    if (options.loaderKey) {
      loaderStore.stopLoading(options.loaderKey)
    }
  }
}
