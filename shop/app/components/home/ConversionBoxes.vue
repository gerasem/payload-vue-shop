<script setup lang="ts">
import type { IPage } from '@/types'

defineProps<{
  boxes?: NonNullable<IPage['docs'][0]['conversionBoxes']> | null
}>()
</script>

<template>
  <div v-if="boxes && boxes.length > 0" class="my-12">
    <div class="grid gap-6 md:grid-cols-2">
      <div
        v-for="(box, index) in boxes"
        :key="box.id || box.title || index"
        class="bg-gray-50 flex h-full"
      >
        <!-- Image Section (Left, 40-50%) -->
        <div class="w-1/2 md:w-5/12 relative">
          <img
            v-if="box.image"
            :src="usePayloadImageUrl(box.image.url)"
            :alt="box.image.alt || box.title || ''"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Content Section (Right) -->
        <div class="w-1/2 md:w-7/12 p-6 flex flex-col justify-center">
          <h3 class="text-3xl font-serif mb-2">
            {{ box.title }}
          </h3>
          <div class="">
            {{ box.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
