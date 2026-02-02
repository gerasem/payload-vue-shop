<script setup lang="ts">
import { usePayloadLink } from '@/composables/usePayloadLink'
import type { MappedLink } from '@/composables/usePayloadLink'
import SmartLink from '@/components/SmartLink.vue'
import type { useCartStore as useCartStoreType } from '@/stores/useCartStore'

const localePath = useLocalePath()

// Initialize cart store on client-side only to avoid SSR errors
const cartStore = ref<ReturnType<typeof useCartStoreType> | null>(null)

onMounted(async () => {
  const { useCartStore } = await import('@/stores/useCartStore')
  cartStore.value = useCartStore()
})

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
        <div v-if="logoSvg" v-html="logoSvg" class="w-24 h-12 lg:-mt-1 sm:w-35 flex items-center" />
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
        <div class="hidden md:block">
          <HeaderLanguageSwitcher v-if="false" />
        </div>

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

          <!-- Cart icon with badge -->
          <div class="relative">
            <UButton
              :to="localePath('/cart')"
              icon="i-bi-cart"
              color="neutral"
              variant="link"
              size="xl"
              :title="cartStore?.totalFormatted || ''"
              aria-label="Shopping Cart"
            />
            <UBadge
              v-if="cartStore && cartStore.count > 0"
              :label="String(cartStore.count)"
              color="primary"
              size="xs"
              class="absolute -right-1 -top-1"
            />
          </div>
        </div>
      </div>
    </template>

    <template #body>
      <div class="space-y-4">
        <!-- Mobile menu with Payload data -->
        <UNavigationMenu :items="navigationLinks" orientation="vertical" class="-mx-2.5" />

        <!-- Language switcher in mobile menu -->
        <div class="pt-4 border-t border-gray-200">
          <HeaderLanguageSwitcher v-if="false" />
        </div>
      </div>
    </template>
  </UHeader>
</template>
