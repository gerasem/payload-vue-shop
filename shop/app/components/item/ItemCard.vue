<script setup lang="ts">
import { getMinPriceFormatted, areAllPricesEqual } from '@/utils/price'
import type { IItem } from '@/types'

const config = useRuntimeConfig()
const localePath = useLocalePath()
const { t } = useI18n()

const props = defineProps<{
  item: IItem
}>()

// Get first image from gallery
const imageUrl = computed(() => {
  const firstImage = props.item.gallery?.[0]
  if (!firstImage?.url) return '/placeholder-product.jpg'
  return `${config.public.payloadUrl}${firstImage.url}`
})

// Format price with translated "from" prefix if variants have different prices
const formattedPrice = computed(() => {
  const minPrice = getMinPriceFormatted(props.item)
  if (minPrice === '—') return minPrice

  const allEqual = areAllPricesEqual(props.item)
  
  return allEqual ? minPrice : `${t('priceFrom')} ${minPrice}`
})
</script>

<template>
  <NuxtLink :to="localePath(`/item/${item.slug}`)" class="group block">
    <!-- Item Image -->
    <div class="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
      <img
        :src="imageUrl"
        :alt="item.gallery?.[0]?.alt || item.title || ''"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    <!-- Item Info -->
    <div class="flex justify-between items-start gap-2">
      <h3 class="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
        {{ item.title }}
      </h3>
      <span class="text-sm font-bold text-gray-900 whitespace-nowrap">
        {{ formattedPrice }}
      </span>
    </div>
  </NuxtLink>
</template>
