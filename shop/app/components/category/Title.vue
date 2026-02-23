<script setup lang="ts">
import type { ICategory } from '@/types'

const localePath = useLocalePath()

defineProps<{
  category: ICategory
}>()
</script>

<template>
  <NuxtLink
    :to="localePath(`/category/${category.slug}`)"
    class="category-title sticky z-10 block pt-2 pb-4  text-gray-900 text-base transition-colors hover:text-primary"
  >
    {{ category.title }}
  </NuxtLink>
</template>

<style scoped lang="scss">
/* Sticky title effect - each category title stacks below previous one */
.category-title {

  /* Calculate sticky top position for each category (1st, 2nd, 3rd, etc.) */
  @for $i from 1 through 10 {
    &:nth-child(#{2 * $i}) {
      top: calc(70px + 40px * #{$i - 1});
    }
  }

  /* On mobile, disable sticky behavior */
  @media (max-width: 768px) {
    position: static;
    background: white;
  }
}
</style>
