/**
 * Stub for fetching real-time inventory
 * This will eventually call a dedicated API endpoint (e.g. /api/inventory/:id)
 * that bypasses the static cache.
 */
export async function useLiveInventory(productId: number | string): Promise<number | null> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // TODO: Replace with actual API call
    // const data = await $fetch<{ inventory: number }>(`/api/inventory/${productId}`)
    // return data.inventory

    // Return a mock value for now (random between 0 and 10 to test UI)
    console.log(`[Stub] Fetching live inventory for product ${productId}`)
    return Math.floor(Math.random() * 10) + 1
}
