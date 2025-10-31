import type { IInformationBanner } from '@/interfaces/IInformationBanner'
import type { InformationBannerQuery } from '@/generated/graphql'
import type { HeaderQuery } from '@/generated/graphql'
import type { IHeader } from '@/interfaces/IHeader'

import INFORMATION_BANNER_QUERY from '@/graphql/informationBanner.gql'
import { gqlRequest } from '@/services/api/api-payload'
import { useLoaderStore } from '@/stores/LoaderStore'
import HEADER_QUERY from '@/graphql/header.gql'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContentStore = defineStore('content', () => {
  const loaderStore = useLoaderStore()

  const informationBanner = ref<IInformationBanner[] | null>(null)
  const header = ref<IHeader | null>(null)

  const fetchInformationBanner = async (): Promise<void> => {
    if (informationBanner.value) return

    const data = await gqlRequest<InformationBannerQuery>(
      INFORMATION_BANNER_QUERY,
      loaderStore.LOADER_KEYS.INFORMATION_BANNER,
    )

    informationBanner.value = data.InformationBanner?.items || []
  }

  const fetchHeader = async (): Promise<void> => {
    if (header.value) return

    const data = await gqlRequest<HeaderQuery>(HEADER_QUERY, loaderStore.LOADER_KEYS.HEADER)

    header.value = data?.Header ?? null
  }

  return { informationBanner, fetchInformationBanner, header, fetchHeader }
})
