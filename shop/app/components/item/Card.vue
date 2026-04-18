<script setup lang="ts">
import type { IItem } from '@/types'

const { t } = useI18n()
const localePath = useLocalePath()

const props = defineProps<{
  item: IItem
}>()

// Get first image from gallery
const imageUrl = computed(() => {
  const firstImage = props.item.gallery?.[0]
  if (!firstImage) return ''
  const url = firstImage.thumbnailURL || firstImage.url
  if (!url) return ''
  return usePayloadImageUrl(url)
})

// Format price with translated "from" prefix if variants have different prices
const formattedPrice = computed(() => {
  const minPrice = getMinPriceFormatted(props.item)
  if (minPrice === '-') return minPrice

  const allEqual = areAllPricesEqual(props.item)

  return allEqual ? minPrice : `${t('priceFrom')} ${minPrice}`
})
</script>

<template>
  <div class="relative group block">
    <NuxtLink :to="localePath(`/item/${item.slug}`)">
      <!-- Item Image -->
      <div class="relative aspect-square bg-gray-100 overflow-hidden mb-3">
        <img
          :src="imageUrl"
          :alt="item.gallery?.[0]?.alt || item.title || ''"
          width="400"
          height="400"
          loading="lazy"
          class="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
    </NuxtLink>

    <!-- Favorite Toggle -->
    <BaseFavoriteButton :product="item" class="absolute top-4 right-4 z-10" />

    <NuxtLink :to="localePath(`/item/${item.slug}`)" class="block">
      <!-- Details -->
      <div class="flex flex-col">
        <div class="flex justify-between items-start gap-4">
          <h3 class="flex-1">
            {{ item.title }}
          </h3>
          <span class="font-semibold whitespace-nowrap">
            {{ formattedPrice }}
          </span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
