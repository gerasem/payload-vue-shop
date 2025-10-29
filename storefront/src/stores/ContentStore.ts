import { fetchHeader, fetchInformationBanner } from '@/services/api/api-payload'
import type { IInformationBanner } from '@/interfaces/IInformationBanner'
import { useLoaderStore } from '@/stores/LoaderStore'
import type { IHeader } from '@/interfaces/IHeader'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContentStore = defineStore('content', () => {
  const loaderStore = useLoaderStore()

  const informationBanner = ref<IInformationBanner | null>(null)
  const header = ref<IHeader | null>(null)

  const getInformationBanner = async () => {
    if (informationBanner.value) {
      return
    }

    informationBanner.value = await fetchInformationBanner(
      loaderStore.LOADER_KEYS.INFORMATION_BANNER,
    )
  }

  const getHeader = async () => {
    if (header.value) {
      return
    }

    header.value = await fetchHeader(loaderStore.LOADER_KEYS.HEADER)
  }

  return { informationBanner, getInformationBanner, header, getHeader }
})
