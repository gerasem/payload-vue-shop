import { fetchHeader, fetchInformationBanner } from '@/services/api/api-payload'
import type { IInformationBanner } from '@/interfaces/IInformationBanner'
import INFORMATION_BANNER_QUERY from '@/graphql/informationBanner.gql'
import { gqlRequest } from '@/services/api/api-payload'
import { useLoaderStore } from '@/stores/LoaderStore'
import type { IHeader } from '@/interfaces/IHeader'
import { defineStore } from 'pinia'
import gql from 'graphql-tag'
import { ref } from 'vue'

export const useContentStore = defineStore('content', () => {
  const loaderStore = useLoaderStore()

  const informationBanner = ref<IInformationBanner | null>(null)
  const header = ref<IHeader | null>(null)

  // const getInformationBanner = async () => {
  //   if (informationBanner.value) {
  //     return
  //   }

  //   informationBanner.value = await fetchInformationBanner(
  //     loaderStore.LOADER_KEYS.INFORMATION_BANNER,
  //   )
  // }

  const getInformationBanner = async () => {
    if (informationBanner.value) return

    const data = await gqlRequest<{ InformationBanner: { items: IInformationBanner } }>(
      INFORMATION_BANNER_QUERY,
      loaderStore.LOADER_KEYS.INFORMATION_BANNER,
    )

    informationBanner.value = data.InformationBanner.items || []
  }

  const getHeader = async () => {
    if (header.value) {
      return
    }

    header.value = await fetchHeader(loaderStore.LOADER_KEYS.HEADER)
  }

  return { informationBanner, getInformationBanner, header, getHeader }
})
