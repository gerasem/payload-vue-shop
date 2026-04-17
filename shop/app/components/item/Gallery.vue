<script setup lang="ts">
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const config = useRuntimeConfig()
const { t } = useI18n()

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
    class="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible scroll-smooth snap-x md:snap-none scrollbar-none"
    :class="images.length === 1 ? 'block!' : ''"
  >
    <a
      v-for="(image, index) in images"
      :key="image.id"
      :href="`${config.public.payloadUrl}${image.url}`"
      :data-pswp-width="image.width"
      :data-pswp-height="image.height"
      target="_blank"
      rel="noreferrer"
      class="group relative cursor-zoom-in"
      :class="images.length === 1 ? 'w-full' : ''"
    >
      <img
        :src="`${config.public.payloadUrl}${image.url}`"
        :alt="image.alt || `Product image ${index + 1}`"
        :width="image.width"
        :height="image.height"
        class="block w-full h-auto object-cover bg-gray-100 rounded-lg transition-opacity group-hover:opacity-85"
        :class="images.length === 1 ? 'max-h-[80vh] object-cover w-full' : 'aspect-3/4 md:aspect-auto'"
      />
      <!-- Zoom icon overlay on hover -->
      <span class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="drop-shadow-lg">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      </span>
    </a>
  </div>

  <p v-else class="text-center text-gray-400">{{ t('No Images') }}</p>
</template>
