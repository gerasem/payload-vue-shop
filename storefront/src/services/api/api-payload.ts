import { apolloClient } from '@/graphql/apollo-client'
import { useLoaderStore } from '@/stores/LoaderStore'
import type { IHeader } from '@/interfaces/IHeader'
import { useToastStore } from '@/stores/ToastStore'
import type { DocumentNode } from 'graphql'
import { sdk } from './config'

const locale: string = localStorage.getItem('lang') || import.meta.env.VITE_DEFAULT_LOCALE

console.log('USE LANG From LS', locale)

export async function gqlRequest<T>(query: DocumentNode, loaderKey: string): Promise<T> {
  return handleRequest(
    async () => {
      const { data } = await apolloClient.query({
        query,
        fetchPolicy: 'cache-first',
        variables: { locale },
      })

      return data
    },
    { loaderKey },
  )
}

async function handleRequest<T>(
  callback: () => Promise<T>,
  options: { loaderKey: string },
): Promise<T> {
  const loaderStore = useLoaderStore()

  try {
    loaderStore.startLoading(options.loaderKey)
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
        1000,
      )
    }

    throw error
  } finally {
    loaderStore.stopLoading(options.loaderKey)
  }
}

// export async function fetchInformationBanner(loaderKey: string): Promise<IInformationBanner> {
//   return handleRequest(
//     async () => {
//       const { items } = await sdk.findGlobal({
//         slug: 'information-banner',
//         locale,
//         depth: 1,
//       })
//       console.log('Fetched items:', items)
//       return items || []
//     },
//     { loaderKey },
//   )
// }

export async function fetchHeader(loaderKey: string): Promise<IHeader> {
  return handleRequest(
    async () => {
      const result = await sdk.findGlobal({
        slug: 'header',
        locale,
        depth: 1,
      })
      console.log('HEADER', result)
      return result as IHeader
    },
    { loaderKey },
  )
}
