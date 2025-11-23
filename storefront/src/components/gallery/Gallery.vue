<script setup lang="ts">
import defaultImage from '@/assets/images/_default-image.svg'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import { onMounted, onUnmounted, ref } from 'vue'
import type { IItem } from '@/interfaces/IItem'
import 'photoswipe/style.css'

const props = defineProps<{
  item: IItem
}>()

const lightbox = ref()

onMounted(() => {
  if (!lightbox.value) {
    lightbox.value = new PhotoSwipeLightbox({
      gallery: '#item-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    })
    lightbox.value.init()
  }
})

onUnmounted(() => {
  if (lightbox.value) {
    lightbox.value.destroy()
    lightbox.value = null
  }
})

const getImage = (imageUrl: string | null | undefined) => {
  return import.meta.env.VITE_BACKEND_DOMAIN + imageUrl || defaultImage
}
</script>

<template>
  <div
    id="gallery"
    class="gallery__row"
    :class="{ 'gallery__row--one-image': item?.gallery?.length === 1 }"
  >
    <div
      v-if="item?.gallery"
      id="item-gallery"
    >
      <a
        v-for="(image, key) in item.gallery"
        :key="key"
        :href="getImage(image?.url)"
        :data-pswp-width="image?.width"
        :data-pswp-height="image?.height"
        target="_blank"
        rel="noreferrer"
        class="gallery__item"
      >
        <img
          :src="getImage(image?.thumbnailURL ?? image?.url)"
          :alt="image?.alt"
        />
      </a>
    </div>

    <p v-else>No images</p>
  </div>
</template>

<style scoped lang="scss">
.gallery {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  &__row {
    column-count: 2;
    column-gap: 15px;

    &--one-image {
      column-count: 1;
      img {
        max-height: 80vh;
      }
    }
  }

  &__item {
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 15px;
    break-inside: avoid;
    cursor: zoom-in;

    img {
      background-color: $background-gray;
      // min-height: 250px;
    }
  }
}
</style>
