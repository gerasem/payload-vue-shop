<script setup lang="ts">
import type { MappedLink } from '@/composables/usePayloadLink'

const { data: footerData } = await useAsyncData('payload-footer', () => usePayloadFooter())

const navLinks = computed(
  () =>
    footerData.value?.navItems
      ?.map(item => usePayloadLink(item))
      .filter((link): link is MappedLink => link !== null) || []
)

const phone = computed(() => footerData.value?.phone || '')
const contactLink = computed(() => usePayloadLink(footerData.value?.contactLink))
const socialLink = computed(() => usePayloadLink(footerData.value?.socialLink))
const slogan = computed(() => footerData.value?.slogan || '')
</script>

<template>
  <footer class="bg-gray-50 mt-8">
    <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-start">
        <!-- Navigation Links -->
        <div class="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
            <SmartLink
              v-for="link in navLinks"
              :key="link.href"
              :link="link"
              class="w-fit hover:text-primary transition-colors"
            />
          </div>
        </div>

        <!-- Slogan inline with links -->
        <div v-if="slogan" class="text-sm text-gray-400 cursor-default">
          {{ slogan }}
        </div>

        <!-- Contact Column -->
        <div class="space-y-2">
          <a
            v-if="phone"
            :href="`tel:${phone.replace(/\s/g, '')}`"
            class="w-fit block font-semibold hover:text-primary transition-colors"
          >
            {{ phone }}
          </a>

          <SmartLink
            v-if="contactLink"
            :link="contactLink"
            class="w-fit block hover:text-primary transition-colors"
          />

          <SmartLink
            v-if="socialLink"
            :link="socialLink"
            class="w-fit block text-primary hover:text-secondary transition-colors"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
