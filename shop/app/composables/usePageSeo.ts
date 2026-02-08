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
  const title = toValue(options.title)
  const description = toValue(options.description)
  const image = options.image ? toValue(options.image) : undefined

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ...(image && {
      ogImage: image,
      twitterImage: image
    }),
    twitterCard: 'summary_large_image'
  })

  // Also set the page title using useHead for better compatibility
  useHead({
    title
  })
}
