type LexicalNode = any

const FORMAT = {
  BOLD: 1,
  ITALIC: 2,
  UNDERLINE: 4,
  STRIKETHROUGH: 8
}

function escapeHTML(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function wrapFormat(text: string, format: number): string {
  let result = text
  if (format & FORMAT.BOLD) result = `<strong>${result}</strong>`
  if (format & FORMAT.ITALIC) result = `<em>${result}</em>`
  if (format & FORMAT.UNDERLINE) result = `<u>${result}</u>`
  if (format & FORMAT.STRIKETHROUGH) result = `<s>${result}</s>`
  return result
}

/**
 * Convert Lexical rich text JSON to HTML string
 * Supports paragraphs, headings, lists, tables, links, and text formatting
 */
export function richTextToHTML(node: LexicalNode): string {
  if (!node) return ''

  let html = ''

  function traverse(n: LexicalNode) {
    if (!n) return

    switch (n.type) {
      case 'root':
        n.children?.forEach(traverse)
        break

      case 'paragraph':
        html += '<p>'
        n.children?.forEach(traverse)
        html += '</p>'
        break

      case 'text':
        html += wrapFormat(escapeHTML(n.text), n.format || 0)
        break

      case 'heading':
        const tag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(n.tag) ? n.tag : 'h2'
        html += `<${tag}>`
        n.children?.forEach(traverse)
        html += `</${tag}>`
        break

      case 'link':
        const url = n.fields?.url || '#'
        html += `<a href="${url}" target="_blank" rel="noopener noreferrer">`
        n.children?.forEach(traverse)
        html += '</a>'
        break

      case 'list':
        const listTag = n.listType === 'number' || n.tag === 'ol' ? 'ol' : 'ul'
        html += `<${listTag}>`
        n.children?.forEach(traverse)
        html += `</${listTag}>`
        break

      case 'listitem':
        html += '<li>'
        n.children?.forEach(traverse)
        html += '</li>'
        break

      case 'table':
        html += '<table>'
        n.children?.forEach(traverse)
        html += '</table>'
        break

      case 'tablerow':
        html += '<tr>'
        n.children?.forEach(traverse)
        html += '</tr>'
        break

      case 'tablecell':
        const tagCell = n.headerState && n.headerState > 0 ? 'th' : 'td'
        html += `<${tagCell}${n.colSpan > 1 ? ` colspan="${n.colSpan}"` : ''}${n.rowSpan > 1 ? ` rowspan="${n.rowSpan}"` : ''}>`
        n.children?.forEach(traverse)
        html += `</${tagCell}>`
        break

      default:
        n.children?.forEach(traverse)
        break
    }
  }

  traverse(node.root || node)

  return html
}
