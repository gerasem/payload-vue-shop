export const useApi = () => {
  const config = useRuntimeConfig()

  const fetchData = async <T>(endpoint: string): Promise<T | null> => {
    try {
      const data = await $fetch<T>(endpoint, {
        baseURL: config.public.apiBase as string || 'http://localhost:3000'
      })
      return data
    } catch (error) {
      console.error('API Error:', error)
      return null
    }
  }

  return {
    fetchData
  }
}
