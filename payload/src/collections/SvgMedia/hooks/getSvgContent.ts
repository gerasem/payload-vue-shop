export const getSvgContent = async ({ doc, req }) => {
  if (doc.filename && doc.mimeType === 'image/svg+xml') {
    const fs = require('fs').promises
    const path = require('path')
    const filePath = path.join(process.cwd(), 'svg-media', doc.filename)
    try {
      const svgContent = await fs.readFile(filePath, 'utf-8')
      doc.svgContent = svgContent 
    } catch (error) {
      console.error('Error reading SVG file:', error)
    }
  }
  return doc
}
