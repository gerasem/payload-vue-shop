<script setup lang="ts">
const localePath = useLocalePath()

// Fetch header data with SSR
const { data: headerData } = await useAsyncData('payload-header', () => usePayloadHeader())

// Helper to map Payload link to route
const mapLink = (item: any): { label: string; to: string } | null => {
  const link = item?.link
  if (!link) return null

  if (link.type === 'reference' && link.reference?.value?.slug) {
    return {
      label: link.label || '',
      to: localePath(`/${link.reference.value.slug}`)
    }
  }

  if (link.type === 'custom' && link.url) {
    return {
      label: link.label || '',
      to: link.url
    }
  }

  return null
}

// Map navigation links from Payload
const navigationLinks = computed(() => 
  (headerData.value?.navItems?.map(mapLink).filter((link): link is { label: string; to: string } => link !== null) || [])
)

// Map nav buttons (support multiple buttons)
const navButtons = computed(() => 
  (headerData.value?.navButtons?.map(mapLink).filter((link): link is { label: string; to: string } => link !== null) || [])
)

// Extract other data
const slogan = computed(() => headerData.value?.slogan || 'Demo project')
const logoSvg = computed(() => headerData.value?.icon?.svgContent || '')
</script>

<template>
  <HeaderInformationBanner />

  <UHeader toggle-side="left" mode="slideover">
    <template #left>
      <!-- Logo - centered on mobile, left on desktop -->
      <NuxtLink
        :to="localePath('/')"
        class="flex items-center gap-3 lg:ml-0 lg:mr-5 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
      >
        <!-- Render logo from Payload SVG -->
        <div v-if="logoSvg" v-html="logoSvg" class="w-24 h-12 lg:-mt-2 sm:w-35 flex items-center" />
        <img v-else src="/assets/images/logo.svg" alt="Logo" class="w-24 h-12 lg:-mt-1 sm:w-35" />
      </NuxtLink>

      <!-- Desktop only content -->
      <div class="hidden lg:flex items-center gap-8">
        <!-- Slogan - hidden on tablet and below -->
        <div class="hidden xl:flex items-center gap-6 text-gray-400">{{ slogan }}</div>

        <!-- Main navigation from Payload -->
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.to"
          :to="link.to"
          class="text-gray-600 hover:text-gray-900 font-medium transition-colors"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </template>

    <template #right>
      <div class="flex items-center gap-8">
        <!-- Language switcher - hidden on mobile -->
        <div class="hidden md:block">
          <HeaderLanguageSwitcher />
        </div>

        <!-- Nav buttons - hidden on mobile -->
        <NuxtLink
          v-for="button in navButtons"
          :key="button.to"
          :to="button.to"
          class="hidden lg:block text-gray-900 hover:text-primary font-medium transition-colors"
        >
          {{ button.label }}
        </NuxtLink>

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

          <!-- Cart icon -->
          <UButton
            :to="localePath('/cart')"
            icon="i-bi-cart"
            color="neutral"
            variant="link"
            size="xl"
            aria-label="Shopping Cart"
          />
        </div>
      </div>
    </template>

    <template #body>
      <div class="space-y-4">
        <!-- Mobile menu with Payload data -->
        <UNavigationMenu :items="navigationLinks" orientation="vertical" class="-mx-2.5" />

        <!-- Language switcher in mobile menu -->
        <div class="pt-4 border-t border-gray-200">
          <HeaderLanguageSwitcher />
        </div>
      </div>
    </template>
  </UHeader>
</template>

