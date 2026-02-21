import type { MaybeRef } from 'vue'

/**
 * Minimal shape of a Payload CMS page with SEO plugin fields.
 * Works for Pages, Products, Categories or any collection with the SEO plugin.
 */
interface PayloadPageSeoSource {
  title?: string | null
  content?: any
  meta?: {
    title?: string | null
    description?: string | null
    image?: { url?: string | null } | null
  } | null
}

/**
 * Strip HTML tags and collapse whitespace to get plain text.
 */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

/**
 * Truncate a string to maxLength characters, appending "…" if cut.
 */
function truncate(text: string, maxLength = 250): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '…'
}

/**
 * Extract plain-text description from a Payload rich-text content object.
 * Falls back to empty string if content is missing or richTextToHTML is not available.
 */
function getContentText(content: any): string {
  if (!content) return ''
  try {
    const html = richTextToHTML(content)
    return stripHtml(html)
  } catch {
    return ''
  }
}

/**
 * Automatically derive SEO meta from a Payload CMS page/document.
 *
 * Priority:
 *   title       → meta.title → page.title → ''
 *   description → meta.description → first 250 chars of page content plain text → ''
 *   image       → meta.image.url → undefined
 */
export function usePayloadPageSeo(
  page: MaybeRef<PayloadPageSeoSource | null | undefined>
) {
  const resolved = computed(() => toValue(page))

  const seoTitle = computed(() =>
    resolved.value?.meta?.title || resolved.value?.title || ''
  )

  const seoDescription = computed(() => {
    const metaDesc = resolved.value?.meta?.description
    if (metaDesc) return metaDesc

    const contentText = getContentText(resolved.value?.content)
    return truncate(contentText, 250)
  })

  const seoImage = computed(() =>
    resolved.value?.meta?.image?.url || undefined
  )

  usePageSeo({
    title: seoTitle,
    description: seoDescription,
    image: seoImage as any
  })
}
