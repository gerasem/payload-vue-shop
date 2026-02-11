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
    class="gallery flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible scroll-smooth snap-x md:snap-none"
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
      class="gallery__item min-w-[85vw] md:min-w-0 snap-center"
    >
      <img
        :src="`${config.public.payloadUrl}${image.thumbnailURL || image.url}`"
        :alt="image.alt || `Product image ${index + 1}`"
        :width="image.width"
        :height="image.height"
        class="w-full h-auto object-cover aspect-[3/4] md:aspect-auto rounded-lg"
      />
    </a>
  </div>
  <p v-else class="text-center text-gray-400">No images</p>
</template>

<style scoped lang="scss">
.gallery {
  // One image special case
  &--one-image {
    display: block; // Override grid/flex

    .gallery__item {
      width: 100%;
    }

    img {
      max-height: 80vh;
      object-fit: cover;
      width: 100%;
    }
  }

  &__item {
    cursor: zoom-in;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.85;
    }

    img {
      background-color: #f3f4f6;
      display: block;
    }
  }

  // Hide scrollbar for clean look on mobile
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
