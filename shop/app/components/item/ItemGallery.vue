<script setup lang="ts">
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const config = useRuntimeConfig()

const props = defineProps<{
  images:
    | Array<{
        id: number
        url: string
        thumbnailURL?: string
        alt?: string
        width?: number
        height?: number
      }>
    | null
    | undefined
}>()

// PhotoSwipe lightbox
const lightbox = ref<PhotoSwipeLightbox | null>(null)

onMounted(() => {
  if (!lightbox.value && props.images && props.images.length > 0) {
    lightbox.value = new PhotoSwipeLightbox({
      gallery: '#product-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe')
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
</script>

<template>
  <div
    v-if="images && images.length > 0"
    id="product-gallery"
    class="gallery"
    :class="{ 'gallery--one-image': images.length === 1 }"
  >
    <a
      v-for="(image, index) in images"
      :key="image.id"
      :href="`${config.public.payloadUrl}${image.url}`"
      :data-pswp-width="image.width"
      :data-pswp-height="image.height"
      target="_blank"
      rel="noreferrer"
      class="gallery__item"
    >
      <img
        :src="`${config.public.payloadUrl}${image.thumbnailURL || image.url}`"
        :alt="image.alt || `Product image ${index + 1}`"
        :width="image.width"
        :height="image.height"
      />
    </a>
  </div>
  <p v-else class="text-center text-gray-400">No images</p>
</template>

<style scoped lang="scss">
.gallery {
  column-count: 2;
  column-gap: 15px;

  &--one-image {
    column-count: 1;

    img {
      max-height: 80vh;
    }
  }

  &__item {
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 15px;
    break-inside: avoid;
    cursor: zoom-in;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.85;
    }

    img {
      background-color: #f3f4f6;
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }
  }
}
</style>
