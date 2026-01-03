<script setup lang="ts">
const localePath = useLocalePath()

// Fetch footer data with SSR
const { data: footerData } = await useAsyncData('payload-footer', () => usePayloadFooter())

// Helper to map Payload link (reuse pattern from header)
const mapLink = (item: any): { label: string; to: string } | null => {
  const link = item?.link
  if (!link) return null

  if (link.type === 'reference' && link.reference?.value?.slug) {
    return {
      label: link.label || '',
      to: localePath(`/page/${link.reference.value.slug}`)
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

// Map navigation links
const navLinks = computed(
  () =>
    footerData.value?.navItems
      ?.map(mapLink)
      .filter((link): link is { label: string; to: string } => link !== null) || []
)

// Extract contact data
const phone = computed(() => footerData.value?.phone || '')
const contactLink = computed(() =>
  footerData.value?.contactLink ? mapLink(footerData.value.contactLink) : null
)
const socialLink = computed(() =>
  footerData.value?.socialLink ? mapLink(footerData.value.socialLink) : null
)
const slogan = computed(() => footerData.value?.slogan || '')
</script>

<template>
  <footer class="bg-gray-50 border-t border-gray-100 mt-auto">
    <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-start">
        <!-- Navigation Links -->
        <div class="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="text-sm text-gray-900 hover:text-primary transition-colors"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>

        <!-- Slogan inline with links -->
        <div v-if="slogan" class="text-sm text-gray-400 cursor-default">
          {{ slogan }}
        </div>

        <!-- Contact Column -->
        <div class="space-y-2 md:text-right">
          <a
            v-if="phone"
            :href="`tel:${phone.replace(/\s/g, '')}`"
            class="block text-sm font-semibold text-gray-900 hover:text-primary transition-colors"
          >
            {{ phone }}
          </a>

          <NuxtLink
            v-if="contactLink"
            :to="contactLink.to"
            class="block text-sm text-gray-900 hover:text-primary transition-colors"
          >
            {{ contactLink.label }}
          </NuxtLink>

          <a
            v-if="socialLink"
            :href="socialLink.to"
            target="_blank"
            rel="noopener noreferrer"
            class="block text-sm text-primary hover:text-primary-600 transition-colors"
          >
            {{ socialLink.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
