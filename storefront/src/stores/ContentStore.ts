import type { InformationBanner } from '@payload-types/payload-types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContentStore = defineStore('content', () => {
  const informationBanner = ref<InformationBanner | null>

  return { informationBanner }
})
