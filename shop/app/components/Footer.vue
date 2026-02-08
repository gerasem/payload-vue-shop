<script setup lang="ts">
import { usePayloadLink } from '@/composables/usePayloadLink'
import type { MappedLink } from '@/composables/usePayloadLink'
import SmartLink from '@/components/SmartLink.vue'

// Fetch footer data with SSR
const { data: footerData } = await useAsyncData('payload-footer', () => usePayloadFooter())

// Map navigation links using pageType from Payload
const navLinks = computed(
  () =>
    footerData.value?.navItems
      ?.map(item => usePayloadLink(item))
      .filter((link): link is MappedLink => link !== null) || []
)

// Extract contact data
const phone = computed(() => footerData.value?.phone || '')
const contactLink = computed(() => {
  const link = usePayloadLink({ link: footerData.value?.contactLink })
  return link
})
const socialLink = computed(() => {
  const link = usePayloadLink({ link: footerData.value?.socialLink })
  return link
})
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
            <SmartLink
              v-for="link in navLinks"
              :key="link.href"
              :link="link"
              class="text-sm text-gray-900 hover:text-primary transition-colors"
            />
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

          <SmartLink
            v-if="contactLink"
            :link="contactLink"
            class="block text-sm text-gray-900 hover:text-primary transition-colors"
          />

          <SmartLink
            v-if="socialLink"
            :link="socialLink"
            class="block text-sm text-primary hover:text-primary-600 transition-colors"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
