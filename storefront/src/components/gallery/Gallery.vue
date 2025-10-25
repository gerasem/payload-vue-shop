<script setup lang="ts">
// import PhotoSwipeLightbox from 'photoswipe/lightbox'
// import { HttpTypes } from '@medusajs/types'
// import 'photoswipe/style.css'

// const props = defineProps<{
//   item: HttpTypes.StoreProduct | null
//   loading: boolean
// }>()

// const getImageSize = (url: string) => {
//   return new Promise((resolve) => {
//     const img = new Image()
//     img.src = url
//     img.onload = () => {
//       resolve({
//         src: url,
//         w: img.naturalWidth,
//         h: img.naturalHeight,
//       })
//     }
//   })
// }

// const openGallery = async (startIndex: number) => {
//   if (!props.item?.images) {
//     return
//   }
//   const items = await Promise.all(props.item.images.map((img) => getImageSize(img.url)))

//   const lightbox = new PhotoSwipeLightbox({
//     dataSource: items,
//     pswpModule: () => import('photoswipe'),
//   })

//   lightbox.init()
//   lightbox.loadAndOpen(startIndex)
// }
</script>

<template>
  <div v-if="false"
    id="gallery"
    class="gallery__row"
    :class="{ 'gallery__row--one-image': item?.images?.length === 1 }"
  >
    <template v-if="loading">
      <figure
        v-for="skeleton in 4"
        :key="skeleton"
        class="block image is-256x256 is-skeleton"
      >
        <img
          alt="Placeholder"
          src="https://placehold.co/128x128"
        />
      </figure>
    </template>

    <template v-else>
      <template v-if="item?.images">
        <a
          v-for="(image, key) in item.images"
          :key="key"
          href="#"
          target="_blank"
          rel="noreferrer"
          class="gallery__item"
          @click.prevent="openGallery(key)"
        >
          <img
            :src="image.url"
            :alt="`Image ${key + 1}`"
          />
        </a>
      </template>

      <p v-else>No images</p>
    </template>
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
      min-height: 250px;
    }
  }
}
</style>
