export async function hydrateOrFetch<T extends Record<string, any>>(
  store: T,
  initialState: any,
  keys: (keyof T)[],
) {
  const hydrateSources = ['content', 'category', 'items'] as const
  const missingKeys: (keyof T)[] = []

  for (const key of keys) {
    let found = false

    for (const source of hydrateSources) {
      const sourceData = initialState?.[source]?.[key]
      if (sourceData !== undefined) {
        store.hydrate(initialState[source])
        found = true
        break
      }
    }

    if (!found) missingKeys.push(key)
  }

  for (const key of missingKeys) {
    const fetchMethod = (store as any)[`fetch${capitalize(String(key))}`]
    if (typeof fetchMethod === 'function') {
      await fetchMethod()
    } else {
      console.warn(`[hydrateOrFetch] No fetch method for "${String(key)}"`)
    }
  }
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
