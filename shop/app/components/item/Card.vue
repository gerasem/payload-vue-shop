<script setup lang="ts">
import type { IItem } from '@/types'
import { useFavoritesStore } from '@/stores/useFavoritesStore'

const { t } = useI18n()
const localePath = useLocalePath()

const favoritesStore = useFavoritesStore()

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

    <!-- Favorite Toggle (Absolutely positioned over the image but outside NuxtLink to prevent routing issues) -->
    <button
      @click.prevent.stop="favoritesStore.toggle(item)"
      class="absolute top-4 right-4 z-10 flex"
      aria-label="Toggle Favorite"
    >
      <ClientOnly>
        <!-- Custom layered SVG combining the solid fill and the outline -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
          class="transition-all overflow-visible hover:text-secondary"
          :class="favoritesStore.isFavorite(item.id) ? 'text-primary' : 'text-gray-500'"
        >
          <!-- 1. The solid heart acting as BOTH the inner white fill AND the outer crisp white border (stroke extending outwards) -->
          <path
            fill="white"
            stroke="white"
            stroke-width="2.5"
            stroke-linejoin="round"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
          />
          <!-- 2. The hollow border layered on top (colored via text-color classes implicitly setting currentColor) -->
          <path
            fill="currentColor"
            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
          />
        </svg>
      </ClientOnly>
    </button>

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
