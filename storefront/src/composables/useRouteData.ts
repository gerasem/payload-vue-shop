import { onServerPrefetch, watch } from 'vue'

/**
 * Composable to load data on server prefetch, mount, and route changes
 * Eliminates code duplication across onServerPrefetch, onMounted, and watch
 * 
 * @param routeParam - Reactive route parameter to watch (e.g., route.params.handle)
 * @param fetchFn - Async function to fetch data, receives the route param value
 * 
 * @example
 * ```ts
 * // In CategoryView.vue
 * useRouteData(
 *   () => route.params.handle as string,
 *   (slug) => itemStore.fetchItemsByCategory(slug)
 * )
 * ```
 */
export function useRouteData<T = string>(
  routeParam: () => T | undefined,
  fetchFn: (param: T) => Promise<void>
) {
  // Load data during SSG build
  onServerPrefetch(async () => {
    const param = routeParam()
    if (param) {
      await fetchFn(param)
    }
  })

  // Load data on mount and watch for route changes
  // immediate: true ensures it runs on mount as well as on changes
  watch(
    routeParam,
    async (newParam) => {
      if (newParam) {
        await fetchFn(newParam)
      }
    },
    { immediate: true }
  )
}

/**
 * Composable to load data only once (no route watching)
 * Useful for pages that don't have route parameters
 * 
 * @param fetchFn - Async function to fetch data
 * 
 * @example
 * ```ts
 * // In HomeView.vue
 * usePageData(async () => {
 *   const categories = categoryStore.categories
 *   await Promise.all(
 *     categories.map(cat => itemStore.fetchItemsByCategory(cat.slug))
 *   )
 * })
 * ```
 */
export function usePageData(fetchFn: () => Promise<void>) {
  // Load data during SSG build
  onServerPrefetch(async () => {
    await fetchFn()
  })

  // Load data in development/client mode
  // Use immediate watch to execute once on mount
  watch(
    () => true,
    async () => {
      await fetchFn()
    },
    { immediate: true, once: true }
  )
}
