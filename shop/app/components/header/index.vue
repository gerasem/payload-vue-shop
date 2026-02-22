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

  <UHeader 
    toggle-side="left" 
    mode="slideover" 
    :ui="{ 
      root: 'border-b-0 my-4 bg-white',
      container: 'max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 w-full flex lg:grid lg:grid-cols-16 lg:gap-12 items-center justify-between',
      left: 'flex items-center lg:contents min-w-0',
      center: 'hidden lg:hidden',
      right: 'flex items-center justify-end lg:col-span-3 min-w-0 flex-shrink-0 gap-2 lg:gap-8'
    }"
  >
    <template #left>
      <!-- Logo - centered on mobile, left on desktop -->
      <NuxtLink
        :to="localePath('/')"
        class="flex items-center gap-3 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:col-span-3 lg:w-full justify-center lg:justify-start"
      >
        <!-- Render logo from Payload SVG -->
        <div v-if="logoSvg" v-html="logoSvg" class="header__logo h-12 flex items-center" />
      </NuxtLink>

      <!-- Desktop only content -->
      <div class="hidden lg:flex items-center gap-12 w-full lg:col-span-10">
        <!-- Slogan - hidden on tablet and below -->
        <div class="hidden xl:flex items-center gap-6 text-gray-400 text-sm whitespace-nowrap">{{ slogan }}</div>

        <!-- Main navigation from Payload -->
        <SmartLink
          v-for="link in navigationLinks"
          :key="link.href"
          :link="link"
          class="text-gray-900 hover:text-primary font-medium transition-colors whitespace-nowrap"
        />
      </div>
    </template>

    <template #right>
      <!-- Nav buttons - hidden on mobile -->
      <SmartLink
        v-for="button in navButtons"
        :key="button.href"
        :link="button"
        class="hidden lg:block text-gray-900 hover:text-primary font-medium transition-colors whitespace-nowrap"
      />

      <!-- User & Cart icons - always visible -->
      <div class="flex items-center">
        <!-- User icon -->
        <NuxtLink
          :to="localePath('/cabinet')"
          class="flex items-center transition-all hover:text-secondary text-gray-400"
          aria-label="Account"
        >
          <UIcon
            name="i-bi-person"
            class="w-8 h-8 "
          />
        </NuxtLink>

        <div class="flex items-center justify-center min-w-[32px]">
          <ClientOnly>
            <template #fallback>
              <UIcon name="i-bi-arrow-repeat" class="w-5 h-5 animate-spin text-gray-400" />
            </template>

            <NuxtLink
              :to="localePath('/cart')"
              class="flex items-center gap-1.5 transition hover:text-secondary ml-3"
              :title="cartStore?.totalFormatted || ''"
              aria-label="Shopping Cart"
            >
              <UIcon
                name="i-bi-bag"
                class="w-7 h-7 -mt-1"
                :class="(cartStore?.count || 0) > 0 ? 'text-secondary' : 'text-gray-400'"
              />
              <span
                v-if="cartStore && cartStore.count > 0"
                class="text-base font-normal text-gray-900"
              >
                {{ cartStore.count }}
              </span>
            </NuxtLink>
          </ClientOnly>
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

<style lang="scss">
.header__logo {
 & svg {
  height: 100%;
  width: 100%;  
 }
}
</style>