import type { MaybeRefOrGetter } from 'vue'

export interface PageSeoOptions {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  image?: MaybeRefOrGetter<string>
}

/**
 * Composable for managing page-specific SEO meta tags
 * Supports both static values and reactive refs/computed values
 */
export function usePageSeo(options: PageSeoOptions) {
  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ...(options.image && {
      ogImage: options.image,
      twitterImage: options.image
    }),
    twitterCard: 'summary_large_image'
  })

  useHead({
    title: options.title
  })
}
