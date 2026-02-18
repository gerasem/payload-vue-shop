/**
 * Generic GraphQL query helper using $fetch
 * Automatically includes locale from i18n
 * Shows toast notifications on errors
 */
export async function usePayloadQuery<T = any>(
  query: string,
  variables: Record<string, any> = {}
): Promise<T | null> {
  // Capture context at start of function
  const nuxtApp = useNuxtApp()
  const config = useRuntimeConfig()
  
  // Safe access to i18n
  const i18n = nuxtApp.$i18n
  const locale = unref(i18n.locale)
  const toast = useToast()

  try {
    const response = await $fetch<{ data: T; errors?: any[] }>(
      `${config.public.payloadUrl}/api/graphql`,
      {
        method: 'POST',
        // credentials: 'include', // Only needed if using cookies/session
        body: {
          query,
          variables: {
            ...variables,
            locale
          }
        }
      }
    )

    if (response.errors) {
      const errorMessage = response.errors[0]?.message || 'GraphQL query failed'
      console.error('GraphQL errors:', response.errors)

      if (import.meta.client) {
        toast.add({
          id: `graphql-error-${Date.now()}`,
          title: 'API Error',
          description: errorMessage,
          color: 'error',
          actions: [
            {
              label: 'Reload Page',
              onClick: () => window.location.reload()
            }
          ]
        })
      }

      // Return null instead of throwing
      return null
    }

    return response.data
  } catch (error: any) {
    // Handle network errors and other fetch errors
    console.error('Payload API error:', error)

    // Only show toast if it's not already a GraphQL error (to avoid duplicate toasts)
    if (import.meta.client && !error.message?.includes('GraphQL')) {
      toast.add({
        id: `api-error-${Date.now()}`,
        title: 'Connection Error',
        description: error.message || 'Failed to connect to API',
        color: 'error',
        actions: []
      })
    }

    // Return null instead of throwing to prevent app crash
    return null
  }
}
