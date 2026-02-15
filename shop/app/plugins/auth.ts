export default defineNuxtPlugin(async (nuxtApp) => {
  const userStore = useUserStore()
  
  // Fetch user if not already logged in
  // This runs on server (for SSR) and client (initial load)
  if (!userStore.loggedIn) {
    try {
      const headers = useRequestHeaders(['cookie'])
      await userStore.fetchUser(headers)
    } catch (e) {
      console.error('Auth plugin error:', e)
    }
  }
})
