<script setup lang="ts">
import defaultImage from '@/assets/images/_default-image.svg'
import { localePath } from '@/composables/localePath.ts'
import type { ICategory } from '@/interfaces/ICategory'
import { computed } from 'vue'

const props = defineProps<{
  category: ICategory
}>()

const imageUrl = computed(() => {
  return (
    import.meta.env.VITE_BACKEND_DOMAIN + props.category.image.sizes?.categoryPreview?.url ||
    defaultImage
  )
})
</script>

<template>
  <RouterLink
    :to="localePath(`category/${category.slug}`)"
    class="is-hidden-mobile"
  >
    <img
      class="image is-16by9 category__image"
      :src="imageUrl"
      :alt="category.image.alt || category.title || ''"
    />
  </RouterLink>
</template>

<style scoped lang="scss">
.category {
  &__image {
    width: 100%;
    object-fit: cover;
  }
}
</style>
