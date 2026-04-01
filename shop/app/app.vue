<script setup lang="ts">
import { de } from '@nuxt/ui/locale'
import { useFavoritesStore } from '@/stores/useFavoritesStore'

const route = useRoute()

// Initialize stores on client-side only
onMounted(async () => {
  const cartStore = useCartStore()
  cartStore.init()

  const favoritesStore = useFavoritesStore()
  favoritesStore.init()
})

// Check if current page is homepage
const isHomePage = computed(
  () => route.path === '/' || route.path === '/de' || route.path === '/en'
)

const { locale } = useI18n()

const toaster = { position: 'bottom-center', expand: false, progress: false }

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
    <Header />

    <!-- Category bar - shown on all pages (hidden on desktop for homepage to avoid duplicate with sidebar) -->
    <CategoryBar :class="{ 'lg:hidden': isHomePage }" />

    <UMain>
      <NuxtPage
        :transition="{
          name: 'page',
          mode: 'out-in'
        }"
      />
    </UMain>

    <Footer />

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
