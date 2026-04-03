<script setup lang="ts">
import type { ICategory } from '@/types'

const localePath = useLocalePath()

const props = defineProps<{
  category: ICategory
}>()

const config = useRuntimeConfig()

const imageUrl = computed(() => {
  return props.category.image?.sizes?.categoryPreview?.url
    ? `${config.public.payloadUrl}${props.category.image.sizes.categoryPreview.url}`
    : `${config.public.payloadUrl}${props.category.image.url}`
})
</script>

<template>
  <NuxtLink
    :to="localePath(`/category/${category.slug}`)"
    class="block relative aspect-video overflow-hidden group bg-gray-100"
  >
    <img
      :src="imageUrl"
      :alt="category.image?.alt || category.title || ''"
      class="w-full h-full object-cover transition-transform group-hover:scale-105"
    />
  </NuxtLink>
</template>
