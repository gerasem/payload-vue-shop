<script setup lang="ts">
import type { ICategory } from '@/types'

const localePath = useLocalePath()

const props = defineProps<{
  category: ICategory
}>()

const config = useRuntimeConfig()

// Get image URL with fallback
const imageUrl = computed(() => {
  return props.category.image?.sizes?.categoryPreview?.url
    ? `${config.public.payloadUrl}${props.category.image.sizes.categoryPreview.url}`
    : props.category.image?.url
      ? `${config.public.payloadUrl}${props.category.image.url}`
      : '/placeholder-category.jpg'
})
</script>

<template>
  <NuxtLink
    :to="localePath(`/category/${category.slug}`)"
    class="block relative aspect-video rounded-lg overflow-hidden group"
  >
    <img
      :src="imageUrl"
      :alt="category.image?.alt || category.title || ''"
      class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </NuxtLink>
</template>
