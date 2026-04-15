<script setup lang="ts">
import type { MappedLink } from '@/composables/usePayloadLink'
import { useFavoritesStore } from '@/stores/useFavoritesStore'
import { sanitizeSvg } from '@/utils/svg'

const localePath = useLocalePath()

const cartStore = useCartStore()
const favoritesStore = useFavoritesStore()

const { data: headerData } = await useAsyncData('payload-header', () => usePayloadHeader())

// Map navigation links from Payload
const navigationLinks = computed(
  () =>
    headerData.value?.navItems
      ?.map(item => usePayloadLink(item))
      .filter((link): link is MappedLink => link !== null) || []
)

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
    target: link.openInNewTab ? '_blank' : undefined
  }))
})

const slogan = computed(() => headerData.value?.slogan)
const logoSvg = computed(() => {
  const content = headerData.value?.icon?.svgContent || ''
  return sanitizeSvg(content)
})
</script>

<template>
  <HeaderInformationBanner />

  <UHeader
    toggle-side="left"
    mode="slideover"
    :ui="{
      root: 'border-b-0 my-4 bg-white',
      container:
        'max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 w-full flex lg:grid lg:grid-cols-16 lg:gap-12 items-center justify-between',
      left: 'flex items-center lg:contents min-w-0',
      center: 'hidden lg:hidden',
      right: 'flex items-center justify-end lg:col-span-3 min-w-0 flex-shrink-0 gap-2 lg:gap-8'
    }"
  >
    <template #left>
      <!-- Logo - centered on mobile, left on desktop -->
      <NuxtLink
        :to="localePath('/')"
        class="flex items-center gap-3 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:col-span-3 lg:w-full justify-center"
      >
        <!-- Render inline SVG to allow CSS styling -->
        <div v-if="logoSvg" v-html="logoSvg" class="header__logo h-16 flex items-center py-1" />
      </NuxtLink>

      <!-- Desktop only content -->
      <div class="hidden lg:flex items-center gap-12 w-full lg:col-span-10">
        <!-- Slogan - hidden on tablet and below -->
        <div class="hidden xl:flex items-center gap-6 text-gray-400 text-sm whitespace-nowrap">
          {{ slogan }}
        </div>

        <!-- Main navigation from Payload -->
        <SmartLink
          v-for="link in navigationLinks"
          :key="link.href"
          :link="link"
          class="hover:text-primary transition-colors whitespace-nowrap"
        />
      </div>
    </template>

    <template #right>
      <!-- Nav buttons - hidden on mobile -->
      <SmartLink
        v-for="button in navButtons"
        :key="button.href"
        :link="button"
        class="hidden lg:block hover:text-primary transition-colors whitespace-nowrap"
      />

      <!-- User, Favorites & Cart icons -->
      <div class="flex items-center">
        <!-- User icon - desktop only -->
        <NuxtLink
          :to="localePath('/cabinet')"
          class="hidden lg:flex items-center transition-all hover:text-secondary text-gray-400"
          aria-label="Account"
        >
          <UIcon name="i-bi-person" class="w-8 h-8" />
        </NuxtLink>

        <!-- Favorites icon - desktop only -->
        <div class="hidden lg:flex items-center justify-center min-w-[32px] ml-3">
          <ClientOnly>
            <template #fallback>
              <UIcon name="i-bi-arrow-repeat" class="w-5 h-5 animate-spin text-gray-400" />
            </template>

            <NuxtLink
              :to="localePath('/favorites')"
              class="flex items-center gap-1.5 transition hover:text-secondary mr-1.5"
              aria-label="Favorites"
            >
              <UIcon
                name="i-bi-heart"
                class="w-7 h-7"
                :class="(favoritesStore?.count || 0) > 0 ? 'text-secondary' : 'text-gray-400'"
              />
              <span v-if="favoritesStore && favoritesStore.count > 0" class="font-normal">
                {{ favoritesStore.count }}
              </span>
            </NuxtLink>
          </ClientOnly>
        </div>

        <!-- Cart Icon -->
        <div class="flex items-center justify-center min-w-[32px] ml-3">
          <ClientOnly>
            <template #fallback>
              <UIcon name="i-bi-arrow-repeat" class="w-5 h-5 animate-spin text-gray-400" />
            </template>

            <NuxtLink
              :to="localePath('/cart')"
              class="flex items-center gap-1.5 transition hover:text-secondary"
              :title="cartStore?.totalFormatted || ''"
              aria-label="Shopping Cart"
              data-test="cart-link"
            >
              <UIcon
                name="i-bi-bag"
                class="w-7 h-7 -mt-1"
                :class="(cartStore?.count || 0) > 0 ? 'text-secondary' : 'text-gray-400'"
              />
              <span v-if="cartStore && cartStore.count > 0" class="font-normal" data-test="cart-count">
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

        <!-- User & Favorites links for mobile -->
        <div class="border-t border-gray-200 pt-4 space-y-1">
          <NuxtLink
            :to="localePath('/cabinet')"
            class="flex items-center gap-3 px-2.5 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <UIcon name="i-bi-person" class="w-5 h-5 text-gray-400" />
            <span>{{ $t('Account') }}</span>
          </NuxtLink>

          <NuxtLink
            :to="localePath('/favorites')"
            class="flex items-center gap-3 px-2.5 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <UIcon
              name="i-bi-heart"
              class="w-5 h-5"
              :class="(favoritesStore?.count || 0) > 0 ? 'text-secondary' : 'text-gray-400'"
            />
            <span>{{ $t('Favorites') }}</span>
            <span
              v-if="favoritesStore && favoritesStore.count > 0"
              class="text-sm text-secondary font-medium"
            >
              ({{ favoritesStore.count }})
            </span>
          </NuxtLink>
        </div>

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
