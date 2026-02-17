<script setup lang="ts">
import type { IPage } from '@/types'

const { t } = useI18n()

// Define props
defineProps<{
  boxes?: NonNullable<IPage['docs'][0]['conversionBoxes']> | null
}>()
</script>

<template>
  <div v-if="boxes && boxes.length > 0" class="my-12">
    <div class="grid gap-6 md:grid-cols-2">
      <div
        v-for="box in boxes"
        :key="box.id || box.title"
        class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex h-full"
      >
        <!-- Image Section (Left, 40-50%) -->
        <div class="w-1/2 md:w-5/12 relative">
          <img
            v-if="box.image && typeof box.image === 'object' && 'url' in box.image"
            :src="usePayloadImageUrl(box.image.url)"
            :alt="box.image.alt || box.title || ''"
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <!-- Content Section (Right) -->
        <div class="w-1/2 md:w-7/12 p-6 flex flex-col justify-center">
          <h3 class="text-2xl font-serif text-gray-900 mb-2 leading-tight">
            {{ box.title }}
          </h3>
          <div class="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
            {{ box.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional: Add custom serif font if not available globally, 
   though 'font-serif' utility usually handles it.
*/
</style>
