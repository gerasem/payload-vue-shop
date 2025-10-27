import type { IInformationBanner } from '@/interfaces/IInformationBanner'
import { useLoaderStore } from '@/stores/LoaderStore'
import { useToastStore } from '@/stores/ToastStore'
import { sdk } from './config'

const locale = localStorage.getItem('lang')

console.log('USE LANG From LS', locale)

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
        10000,
      )
    }

    throw error
  } finally {
    loaderStore.stopLoading(options.loaderKey)
  }
}

export async function fetchInformationBanner(loaderKey: string): Promise<IInformationBanner> {
  return handleRequest(
    async () => {
      const { items } = await sdk.findGlobal({
        slug: 'information-banner',
        locale,
        depth: 1,
      })
      console.log('Fetched items:', items)
      return items || []
    },
    { loaderKey },
  )
}
