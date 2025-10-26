import sanitizeHtml from 'sanitize-html';

export function sanitizeSvg(svgContent: string | undefined): string | undefined {
  if (!svgContent) return undefined;

  return sanitizeHtml(svgContent, {
    allowedTags: ['svg', 'path', 'g', 'circle', 'rect', 'line', 'polygon', 'polyline'],
    allowedAttributes: {
      '*': ['xmlns', 'width', 'height', 'fill', 'viewBox', 'class', 'd'],
    },
  });
}