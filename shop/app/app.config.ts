export default defineAppConfig({
  ui: {
    notifications: {
      position: 'bottom-0 start-1/2 -translate-x-1/2'
    },
    notification: {
      default: {
        color: 'neutral' // White background with shadow for standard messages
      },
      background: 'bg-white dark:bg-gray-900',
      shadow: 'shadow-lg',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-800'
    },
    colors: {
      primary: 'primary', // #eb3e7d
      secondary: 'secondary', // #dfa44c
      neutral: 'gray' // Custom gray palette
    }
  }
})
