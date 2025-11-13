export async function hydrateOrFetch<T extends Record<string, any>>(
  store: T,
  initialState: any,
  keys: (keyof T)[],
) {
  const missingKeys: (keyof T)[] = []

  for (const key of keys) {
    console.log('key:key:', key)
    console.log('initialState?.content?.[key]', initialState?.content?.[key])
    if (initialState?.content?.[key]) {
      store.hydrate(initialState.content)
    } else if (initialState?.category?.[key]) {
      store.hydrate(initialState.category)
    } else if (initialState?.items?.[key]) {
      store.hydrate(initialState.items)
    } else {
      missingKeys.push(key)
    }
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
