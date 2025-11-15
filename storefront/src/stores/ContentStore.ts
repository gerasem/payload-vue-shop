import type { IInformationBanner } from '@/interfaces/IInformationBanner'
import type { InformationBannerQuery } from '@/generated/graphql'
import type { PageBySlugQuery } from '@/generated/graphql'
import type { FooterQuery } from '@/generated/graphql'
import type { HeaderQuery } from '@/generated/graphql'
import type { IHeader } from '@/interfaces/IHeader'
import type { IFooter } from '@/interfaces/IFooter'
import type { IPage } from '@/interfaces/IPage'

import INFORMATION_BANNER_QUERY from '@/graphql/informationBanner.gql'
import PAGE_BY_SLUG_QUERY from '@/graphql/pageBySlug.gql'
import HEADER_QUERY from '@/graphql/header.gql'
import FOOTER_QUERY from '@/graphql/footer.gql'

import { gqlRequest } from '@/services/api/api-payload'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContentStore = defineStore('content', () => {
  const informationBanner = ref<IInformationBanner[] | null>(null)
  const header = ref<IHeader | null>(null)
  const footer = ref<IFooter | null>(null)
  const homePage = ref<IPage | null>(null)

  const fetchInformationBanner = async (): Promise<void> => {
    if (informationBanner.value) return
    const data = await gqlRequest<InformationBannerQuery>(INFORMATION_BANNER_QUERY)
    informationBanner.value = data.InformationBanner?.items || []
  }

  const fetchHeader = async (): Promise<void> => {
    if (header.value) return
    const data = await gqlRequest<HeaderQuery>(HEADER_QUERY)
    header.value = data?.Header ?? null
  }

  const fetchFooter = async (): Promise<void> => {
    if (footer.value) return
    const data = await gqlRequest<FooterQuery>(FOOTER_QUERY)
    footer.value = data?.Footer ?? null
  }

  const fetchHomePage = async (): Promise<void> => {
    if (homePage.value) return
    const data = await gqlRequest<PageBySlugQuery>(PAGE_BY_SLUG_QUERY, { slug: 'home' })
    homePage.value = data.Pages?.docs?.[0] || null
  }

  const hydrate = (data) => {
    console.log('DATA IN HYDRATE:', data)
    if (data?.informationBanner) {
      informationBanner.value = data.informationBanner
    }
    if (data?.header) {
      header.value = data.header
    }
    if (data?.footer) {
      footer.value = data.footer
    }
    if (data?.homePage) {
      homePage.value = data.homePage
    }
  }

  return {
    informationBanner,
    fetchInformationBanner,
    header,
    fetchHeader,
    footer,
    fetchFooter,
    homePage,
    fetchHomePage,
    hydrate,
  }
})
