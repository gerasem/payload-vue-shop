import { mount, flushPromises } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import ItemPage from '@/pages/item/[slug].vue'
import { createPinia, setActivePinia } from 'pinia'

// Mocks
vi.mock('@/composables/usePayloadItemBySlug', () => ({
  usePayloadItemBySlug: vi.fn()
}))
vi.mock('@/composables/useLiveInventory', () => ({
  useLiveInventory: vi.fn().mockResolvedValue(10)
}))
vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { slug: 'test-product' } })
}))
// Stub global Nuxt macros & composables
vi.stubGlobal('definePageMeta', vi.fn())
vi.stubGlobal('usePageSeo', vi.fn())
vi.stubGlobal('useRoute', () => ({ params: { slug: 'test-product' } }))
vi.stubGlobal('useLocalePath', () => (path: string) => path)
vi.stubGlobal('useI18n', () => ({ t: (key: string) => key }))
vi.stubGlobal('useToast', () => ({ add: vi.fn() }))
vi.stubGlobal('createError', vi.fn())

// Mock imports
vi.mock('#imports', () => ({
  useAsyncData: vi.fn(async (key, handler) => {
    // If handler is provided, execute it and await result
    const result = handler ? await handler() : null
    return { data: { value: result } }
  }),
  useLocalePath: () => (path: string) => path,
  useI18n: () => ({ t: (key: string) => key }),
  useToast: () => ({ add: vi.fn() }),
  useRoute: () => ({ params: { slug: 'test-product' } }),
  createError: vi.fn(),
  // Mock useProductVariants if it's auto-imported
  useProductVariants: (product: any) => {
     const { ref, computed } =  require('vue')
     return {
         selectedOptions: ref({}),
         selectedVariant: computed(() => null),
         displayPrice: computed(() => '€100.00')
     }
  }
}))

// Mock vue-router just in case explicit import is generated
vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { slug: 'test-product' } })
}))

// Mock resolved payload data for a simple product (no variants)
const mockProduct = {
  id: 1,
  title: 'Test Simple Product',
  slug: 'test-simple',
  priceInEUR: 100,
  inventory: 10,
  enableVariants: false,
  gallery: [],
  description: { root: { children: [] } }
}

// Mock usePayloadItemBySlug to return our product
vi.mocked(await import('@/composables/usePayloadItemBySlug')).usePayloadItemBySlug.mockResolvedValue(mockProduct)

describe('Item Page (No Variants)', () => {
  it('displays the correct price without "From" text', async () => {
    setActivePinia(createPinia())

    // Wrapper component with Suspense to handle async setup in ItemPage
    const TestWrapper = {
        components: { ItemPage },
        template: '<Suspense><ItemPage /></Suspense>'
    }

    const wrapper = mount(TestWrapper, {
      global: {
        stubs: {
          ItemGallery: true,
          InventoryBadge: true,
          VariantSelector: true,
          UButton: true,
          UInput: true,
          UAlert: true,
          NuxtLink: true,
          ClientOnly: true // Often used in Nuxt
        }
      }
    })

    // Wait for the async component to resolve
    await flushPromises()

    // Find price element inside the rendered ItemPage
    // Since we wrapped it, we search in the wrapper
    const priceEl = wrapper.find('.text-2xl.font-semibold')
    
    expect(priceEl.exists()).toBe(true)
    expect(priceEl.text()).toContain('€100.00')
    expect(priceEl.text()).not.toContain('From')
    expect(priceEl.text()).not.toContain('priceFrom') // Check translation key
  })
})
