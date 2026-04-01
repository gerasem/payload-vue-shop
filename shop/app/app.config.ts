export default defineAppConfig({
  ui: {
    toast: {
      slots: {
        root: 'relative group overflow-hidden bg-default shadow-[0_0_40px_10px_rgba(0,0,0,0.05)] border-none p-4 flex gap-2.5 focus:outline-none'
      }
    },

    colors: {
      primary: 'primary', // #eb3e7d
      secondary: 'secondary', // #dfa44c
      neutral: 'gray' // Custom gray palette
    }
  }
})
