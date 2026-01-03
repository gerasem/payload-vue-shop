<script setup lang="ts">
// Fetch banner data with SSR
const { data: bannerData } = await useAsyncData('payload-info-banner', () =>
  usePayloadInformationBanner()
)
</script>

<template>
  <div v-if="bannerData?.items?.length" class="bg-primary-50 text-gray-600 text-base">
    <div class="container mx-auto px-4 py-2">
      <div class="flex items-center justify-center gap-6 text-sm text-gray-600">
        <div
          v-for="(item, index) in bannerData.items"
          :key="item.id || index"
          class="flex items-center gap-2"
        >
          <div v-if="item.icon?.svgContent" v-html="item.icon.svgContent" class="w-4 h-4" />
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
