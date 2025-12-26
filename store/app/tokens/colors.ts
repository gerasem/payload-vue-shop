export const colors = {
  text: '#1e1e1e',
  icons: '#787878',
  primary: '#eb3e7d',
  'primary-opacity': 'rgba(235, 62, 125, 0.1)',
  secondary: '#dfa44c',
  muted: '#aaa',
  'background-gray': '#f7f7f7',
  separator: '#F0F0F0',
} as const

export type ColorToken = typeof colors
