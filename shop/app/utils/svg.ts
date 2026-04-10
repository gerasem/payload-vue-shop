import DOMPurify from 'isomorphic-dompurify'

const SVG_PURIFY_CONFIG = {
  USE_PROFILES: { svg: true, html: false },
  ADD_TAGS: ['style', 'image'], // Preserve encapsulated SVG styles & raster images
  ADD_ATTR: ['href', 'xlink:href'],
  RETURN_DOM: false
}

/**
 * Sanitizes an SVG string to prevent XSS while explicitly preserving all valid SVG geometry.
 */
export function sanitizeSvg(content: string): string {
  if (!content) return ''
  return DOMPurify.sanitize(content, SVG_PURIFY_CONFIG) as string
}
