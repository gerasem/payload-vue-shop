<script setup lang="ts">
import type { ICategory } from '@/types'

const localePath = useLocalePath()

defineProps<{
  category: ICategory
  clickable?: boolean
}>()
</script>

<template>
  <component 
    :is="clickable ? 'div' : 'NuxtLink'"
    :to="!clickable ? localePath(`/category/${category.slug}`) : undefined"
    class="category-title sticky z-10 block py-3 text-gray-900 font-semibold text-lg transition-colors"
    :class="{ 'hover:text-primary': !clickable }"
  >
    {{ category.title }}
  </component>
</template>

<style scoped lang="scss">
/* Sticky title effect - each category title stacks below previous one */
.category-title {
  background: linear-gradient(to bottom, white 0%, white 90%, transparent 100%);

  /* Calculate sticky top position for each category (1st, 2nd, 3rd, etc.) */
  @for $i from 1 through 10 {
    &:nth-child(#{2 * $i}) {
      top: calc(48px + 52px * #{$i - 1});
    }
  }

  /* On mobile, disable sticky behavior */
  @media (max-width: 768px) {
      position: static;
      background: white;
  }
}
</style>
