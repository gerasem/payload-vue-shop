/**
 * Generic GraphQL query helper using $fetch
 * Automatically includes locale from i18n
 */
export async function usePayloadQuery<T = any>(
  query: string,
  variables: Record<string, any> = {}
): Promise<T> {
  const config = useRuntimeConfig()
  const { locale } = useI18n()

  const response = await $fetch<{ data: T; errors?: any[] }>(
    `${config.public.payloadUrl}/api/graphql`,
    {
      method: 'POST',
      body: {
        query,
        variables: {
          ...variables,
          locale: locale.value
        }
      }
    }
  )

  if (response.errors) {
    console.error('GraphQL errors:', response.errors)
    throw new Error(response.errors[0]?.message || 'GraphQL query failed')
  }

  return response.data
}
