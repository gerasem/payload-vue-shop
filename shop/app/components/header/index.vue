<script setup lang="ts">
import type { MappedLink } from '@/composables/usePayloadLink'

const localePath = useLocalePath()

// Initialize cart store on client-side only to avoid SSR errors
const cartStore = useCartStore()

// Fetch header data with SSR
const { data: headerData } = await useAsyncData('payload-header', () => usePayloadHeader())

// Map navigation links from Payload
const navigationLinks = computed(
  () =>
    headerData.value?.navItems
      ?.map(item => usePayloadLink(item))
      .filter((link): link is MappedLink => link !== null) || []
)

// Map nav buttons (support multiple buttons)
const navButtons = computed(
  () =>
    headerData.value?.navButtons
      ?.map(item => usePayloadLink(item))
      .filter((link): link is MappedLink => link !== null) || []
)

// Combine navigation links and nav buttons for the mobile menu
// UNavigationMenu expects a specific matching format, typically `to` over `href`
const mobileMenuLinks = computed(() => {
  const allLinks = [...navigationLinks.value, ...navButtons.value]
  return allLinks.map(link => ({
    label: link.label,
    to: link.href,
    target: link.openInNewTab ? '_blank' : undefined,
  }))
})

// Extract other data
const slogan = computed(() => headerData.value?.slogan)
const logoSvg = computed(() => headerData.value?.icon?.svgContent || '')
</script>

<template>
  <HeaderInformationBanner />

  <UHeader toggle-side="left" mode="slideover" :ui="{ root: 'border-b-0 my-4 bg-white' }">
    <template #left>
      <!-- Logo - centered on mobile, left on desktop -->
      <NuxtLink
        :to="localePath('/')"
        class="flex items-center gap-3 lg:ml-0 lg:mr-5 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
      >
        <!-- Render logo from Payload SVG -->
        <div v-if="logoSvg" v-html="logoSvg" class="h-12 lg:-mt-1 flex items-center" />
      </NuxtLink>

      <!-- Desktop only content -->
      <div class="hidden lg:flex items-center gap-8">
        <!-- Slogan - hidden on tablet and below -->
        <div class="hidden xl:flex items-center gap-6 text-gray-400">{{ slogan }}</div>

        <!-- Main navigation from Payload -->
        <SmartLink
          v-for="link in navigationLinks"
          :key="link.href"
          :link="link"
          class="text-gray-600 hover:text-gray-900 font-medium transition-colors"
        />
      </div>
    </template>

    <template #right>
      <div class="flex items-center gap-8">
        <!-- Language switcher - hidden on mobile -->
        <!-- <div v-if="false" class="hidden md:block">
          <HeaderLanguageSwitcher v-if="false" />
        </div> -->

        <!-- Nav buttons - hidden on mobile -->
        <SmartLink
          v-for="button in navButtons"
          :key="button.href"
          :link="button"
          class="hidden lg:block text-gray-900 hover:text-primary font-medium transition-colors"
        />

        <!-- User & Cart icons - always visible -->
        <div class="flex items-center">
          <!-- User icon -->
          <UButton
            :to="localePath('/cabinet')"
            icon="i-bi-person"
            color="neutral"
            variant="link"
            size="xl"
            aria-label="Account"
          />

          <div class="flex items-center justify-center min-w-[32px]">
            <ClientOnly>
              <template #fallback>
                <UIcon name="i-heroicons-arrow-path" class="w-5 h-5 animate-spin text-gray-400" />
              </template>

              <NuxtLink
                :to="localePath('/cart')"
                class="flex items-center gap-1.5 transition-opacity hover:opacity-80"
                :title="cartStore?.totalFormatted || ''"
                aria-label="Shopping Cart"
              >
                <UIcon
                  name="i-bi-cart"
                  class="w-7 h-7"
                  :class="(cartStore?.count || 0) > 0 ? 'text-secondary-500' : 'text-gray-500'"
                />
                <span
                  v-if="cartStore && cartStore.count > 0"
                  class="text-base font-normal text-gray-900 dark:text-gray-100"
                >
                  {{ cartStore.count }}
                </span>
              </NuxtLink>
            </ClientOnly>
          </div>
        </div>
      </div>
    </template>

    <template #body>
      <div class="space-y-4">
        <!-- Mobile menu with Payload data (combines main links and buttons) -->
        <UNavigationMenu :items="mobileMenuLinks" orientation="vertical" class="-mx-2.5" />

        <!-- Language switcher in mobile menu -->
        <!-- <div v-if="false" class="pt-4 border-t border-gray-200">
          <HeaderLanguageSwitcher />
        </div> -->
      </div>
    </template>
  </UHeader>
</template>
