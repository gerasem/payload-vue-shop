<script setup lang="ts">
import { formatEuro } from '@/utils/price'

const config = useRuntimeConfig()
const localePath = useLocalePath()

const props = defineProps<{
  product: any
}>()

// Get first image from gallery
const imageUrl = computed(() => {
  const firstImage = props.product.gallery?.[0]
  if (!firstImage?.url) return '/placeholder-product.jpg'
  return `${config.public.payloadUrl}${firstImage.url}`
})

// Format price (from cents to EUR)
const formattedPrice = computed(() => {
  return formatEuro(props.product.priceInEUR)
})
</script>

<template>
  <NuxtLink
    :to="localePath(`/item/${product.slug}`)"
    class="group block"
  >
    <!-- Product Image -->
    <div class="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
      <img
        :src="imageUrl"
        :alt="product.gallery?.[0]?.alt || product.title"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    <!-- Product Info -->
    <div class="flex justify-between items-start gap-2">
      <h3 class="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
        {{ product.title }}
      </h3>
      <span class="text-sm font-bold text-gray-900 whitespace-nowrap">
        {{ formattedPrice }}
      </span>
    </div>
  </NuxtLink>
</template>
