/**
 * Build a full image URL from a Payload CMS relative path
 */
export function usePayloadImageUrl(relativePath: string | null | undefined): string {
    if (!relativePath) return ''
    const config = useRuntimeConfig()
    return `${config.public.payloadUrl}${relativePath}`
}
