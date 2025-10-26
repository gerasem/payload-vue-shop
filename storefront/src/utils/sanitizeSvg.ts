import DOMPurify from 'dompurify'

export function sanitizeSvg(svgContent: string | undefined): string | undefined {
  if (!svgContent) return undefined

  return DOMPurify.sanitize(svgContent, {
    ALLOWED_TAGS: ['svg', 'path', 'g', 'circle', 'rect', 'line', 'polygon', 'polyline'],
    ALLOWED_ATTR: ['xmlns', 'width', 'height', 'fill', 'viewBox', 'class', 'd'],
    KEEP_CONTENT: true,
  })
}
