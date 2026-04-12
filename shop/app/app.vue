<script setup lang="ts">
import { de } from '@nuxt/ui/locale'
import { useFavoritesStore } from '@/stores/useFavoritesStore'

const route = useRoute()

// Initialize stores on client-side only
onMounted(async () => {
  const cartStore = useCartStore()
  await cartStore.init()

  const favoritesStore = useFavoritesStore()
  await favoritesStore.init()
})

// Check if current page is homepage
const isHomePage = computed(
  () => route.path === '/' || route.path === '/de' || route.path === '/en'
)

const { locale } = useI18n()

const toaster = { position: 'bottom-center' as const, expand: false, progress: false }

// Fetch global shopping settings for dynamic items like favicon
const { data: shoppingSettings } = await useAsyncData('shopping-settings', () =>
  useShoppingSettings()
)

const config = useRuntimeConfig()

const faviconUrl = computed(() => {
  const mediaObj = shoppingSettings.value?.favicon
  if (mediaObj && 'url' in mediaObj && mediaObj.url) {
    // Manually construct URL to avoid calling useRuntimeConfig() inside computed
    return `${config.public.payloadUrl}${mediaObj.url}`
  }
  return '/favicon.ico' // Fallback to local default
})

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: faviconUrl }],
  htmlAttrs: {
    lang: locale
  }
})

// === SEO JSON-LD Markup ===
const { injectSchema } = useJsonLd()

const storeName = 'NuxtShop Demo'
const siteUrl = useRequestURL().origin

// WebSite Schema
injectSchema(() => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: storeName,
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/all-items?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
}))

// Organization Schema
injectSchema(() => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: storeName,
  url: siteUrl,
  logo: faviconUrl.value !== '/favicon.ico' ? faviconUrl.value : undefined
}))
</script>

<template>
  <UApp :locale="de" :toaster="toaster">
    <NuxtLoadingIndicator color="#dfa44c" />
    <NuxtErrorBoundary>
      <Header />
      <template #error="{ error }">
        <div class="h-16 flex items-center justify-center bg-gray-100 text-gray-400 text-xs text-center border-b border-gray-200">
          Header temporarily unavailable
        </div>
      </template>
    </NuxtErrorBoundary>

    <!-- Category bar - shown on all pages (hidden on desktop for homepage to avoid duplicate with sidebar) -->
    <NuxtErrorBoundary>
      <CategoryBar :class="{ 'lg:hidden': isHomePage }" />
      <template #error="{ error }">
        <div class="h-10 bg-gray-50 flex items-center justify-center text-xs text-gray-400 border-b border-gray-200">
          Categories temporarily unavailable
        </div>
      </template>
    </NuxtErrorBoundary>

    <UMain>
      <NuxtErrorBoundary>
        <NuxtPage
          :transition="{
            name: 'page',
            mode: 'out-in'
          }"
        />
        <template #error="{ error, clearError }">
          <div class="p-8 text-center max-w-xl mx-auto mt-10 border border-gray-200 rounded-xl shadow-sm">
            <h2 class="text-xl font-medium text-gray-900 mb-2">Error Loading Page</h2>
            <p class="text-gray-500 text-sm mb-4">We encountered an issue while loading this content.</p>
            <UButton color="neutral" @click="clearError">Try again</UButton>
          </div>
        </template>
      </NuxtErrorBoundary>
    </UMain>

    <NuxtErrorBoundary>
      <Footer />
      <template #error="{ error }">
        <div class="h-32 bg-gray-900 flex items-center justify-center text-sm text-gray-500">
          Footer temporarily unavailable
        </div>
      </template>
    </NuxtErrorBoundary>

    <!-- GDPR Cookie Banner -->
    <ClientOnly>
      <CookieBanner />
    </ClientOnly>
  </UApp>
</template>

<style>
/* Page transition animations */
.page-enter-active,
.page-leave-active {
  transition: all 0.2s ease-in-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
