<script setup lang="ts">
import { de } from '@nuxt/ui/locale'
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const { t, locale } = useI18n()
const config = useRuntimeConfig()

// Re-use dynamic favicon logic from app.vue for consistency (optional for error page,
// but good if we want the exact same head)
const { data: shoppingSettings } = await useAsyncData('error-shopping-settings', () =>
  useShoppingSettings()
)

const faviconUrl = computed(() => {
  const mediaObj = shoppingSettings.value?.favicon
  if (mediaObj && 'url' in mediaObj && mediaObj.url) {
    return `${config.public.payloadUrl}${mediaObj.url}`
  }
  return '/favicon.ico'
})

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: faviconUrl }],
  htmlAttrs: {
    lang: locale
  }
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <UApp :locale="de">
    <NuxtLoadingIndicator color="#dfa44c" />
    <Header />

    <CategoryBar />

    <UMain>
      <!-- Centralized Error State mimicking Empty Cart -->
      <AppContainer class="py-24 text-center">
        <h1 class="mb-2 text-5xl font-bold mb-8">
          {{ error?.statusCode || 500 }}
        </h1>

        <p class="mb-8 text-lg text-gray-600">
          {{
            error?.statusCode === 404
              ? t('Page not found')
              : error?.message || t('An error occurred')
          }}
        </p>

        <UButton @click="handleError" color="primary" size="lg">
          {{ t('Return Home') }}
        </UButton>
      </AppContainer>
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
