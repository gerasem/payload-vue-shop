import type { MaybeRefOrGetter } from 'vue'

export function useJsonLd() {
  /**
   * Inject a JSON-LD script tag into the head securely.
   */
  function injectSchema(schema: MaybeRefOrGetter<Record<string, any>>) {
    useHead(() => {
      const resolvedSchema = toValue(schema)
      if (!resolvedSchema) return {}

      return {
        script: [
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(resolvedSchema)
          }
        ]
      }
    })
  }

  return {
    injectSchema
  }
}
