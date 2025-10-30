import type { IInformationBanner } from '@/interfaces/IInformationBanner'
import INFORMATION_BANNER_QUERY from '@/graphql/informationBanner.gql'
import { fetchHeader } from '@/services/api/api-payload'
import { gqlRequest } from '@/services/api/api-payload'
import type { HeaderQuery } from '@/generated/graphql'
import { useLoaderStore } from '@/stores/LoaderStore'
import type { IHeader } from '@/interfaces/IHeader'
import HEADER_QUERY from '@/graphql/header.gql'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContentStore = defineStore('content', () => {
  const loaderStore = useLoaderStore()

  const informationBanner = ref<IInformationBanner | null>(null)
  const header = ref<IHeader | null>(null)

  const fetchInformationBanner = async () => {
    if (informationBanner.value) return

    console.log('QUERY:', INFORMATION_BANNER_QUERY)

    const data = await gqlRequest<{ InformationBanner: { items: IInformationBanner } }>(
      INFORMATION_BANNER_QUERY,
      loaderStore.LOADER_KEYS.INFORMATION_BANNER,
    )

    informationBanner.value = data.InformationBanner.items || []
  }

  const fetchHeader = async () => {
    if (header.value) return

    const data = await gqlRequest<HeaderQuery>(HEADER_QUERY, loaderStore.LOADER_KEYS.HEADER)

    header.value = data.Header
  }

  // const getHeader = async () => {
  //   if (header.value) {
  //     return
  //   }

  //   header.value = await fetchHeader(loaderStore.LOADER_KEYS.HEADER)
  // }

  return { informationBanner, fetchInformationBanner, header, fetchHeader }
})
