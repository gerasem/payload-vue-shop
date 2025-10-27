import type { IInformationBanner } from '@/interfaces/IInformationBanner'
import { fetchInformationBanner } from '@/services/api/api-payload'
import { useLoaderStore } from '@/stores/LoaderStore'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContentStore = defineStore('content', () => {
  const loaderStore = useLoaderStore()

  const informationBanner = ref<IInformationBanner | null>(null)

  const getInformationBanner = async () => {
    if (informationBanner.value) {
      return
    }

    informationBanner.value = await fetchInformationBanner(
      loaderStore.LOADER_KEYS.INFORMATION_BANNER,
    )
  }
  return { informationBanner, getInformationBanner }
})
