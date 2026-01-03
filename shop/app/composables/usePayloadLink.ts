/**
 * Composable for mapping Payload CMS link objects to usable link data
 * Handles both internal (reference) and custom URL links
 */

export interface MappedLink {
  label: string
  href: string
  isExternal: boolean
  openInNewTab: boolean
}

/**
 * Maps a Payload CMS link to a usable link object
 */
export function usePayloadLink(item: any): MappedLink | null {
  const localePath = useLocalePath()
  
  if (!item?.link) return null
  
  const link = item.link
  
  // Handle internal reference links (to pages/posts)
  if (link.type === 'reference' && link.reference?.value?.slug) {
    return {
      label: link.label || '',
      href: localePath(`/${link.reference.value.slug}`),
      isExternal: false,
      openInNewTab: link.newTab === true // Only true if explicitly set to true
    }
  }
  
  // Handle custom URL links (can be internal relative URLs or external URLs)
  if (link.type === 'custom' && link.url) {
    // Detect if it's actually an external link (different domain)
    const isExternal = link.url.startsWith('http://') || link.url.startsWith('https://')
    
    return {
      label: link.label || '',
      href: link.url,
      isExternal,
      // Open in new tab if: explicitly set to true OR if null/undefined and is external URL
      openInNewTab: link.newTab === true || (link.newTab !== false && isExternal)
    }
  }
  
  return null
}
