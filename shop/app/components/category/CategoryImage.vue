<script setup lang="ts">
import type { ICategory } from '@/types'

const localePath = useLocalePath()

const props = defineProps<{
  category: ICategory
  clickable?: boolean
}>()

const config = useRuntimeConfig()

// Get image URL with fallback
const imageUrl = computed(() => {
  return props.category.image?.sizes?.categoryPreview?.url
    ? `${config.public.payloadUrl}${props.category.image.sizes.categoryPreview.url}`
    : `${config.public.payloadUrl}${props.category.image.url}`
})
</script>

<template>
  <component
    :is="clickable ? 'div' : 'NuxtLink'"
    :to="!clickable ? localePath(`/category/${category.slug}`) : undefined"
    class="block relative aspect-video rounded-lg overflow-hidden group"
  >
    <img
      :src="imageUrl"
      :alt="category.image?.alt || category.title || ''"
      class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </component>
</template>
