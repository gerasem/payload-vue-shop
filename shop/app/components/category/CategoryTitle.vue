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
    class="category-title sticky z-10 block py-3 text-gray-900 hover:text-primary font-semibold text-lg transition-colors"
  >
    {{ category.title }}
  </NuxtLink>
</template>

<style scoped>
/* Sticky title effect - each category title stacks below previous one */
.category-title {
  background: linear-gradient(to bottom, white 0%, white 90%, transparent 100%);
}

/* Calculate sticky top position for each category (1st, 2nd, 3rd, etc.) */
.category-title:nth-child(2) {
  top: 48px;
} /* First title */
.category-title:nth-child(4) {
  top: calc(48px + 52px * 1);
}
.category-title:nth-child(6) {
  top: calc(48px + 52px * 2);
}
.category-title:nth-child(8) {
  top: calc(48px + 52px * 3);
}
.category-title:nth-child(10) {
  top: calc(48px + 52px * 4);
}
.category-title:nth-child(12) {
  top: calc(48px + 52px * 5);
}
.category-title:nth-child(14) {
  top: calc(48px + 52px * 6);
}
.category-title:nth-child(16) {
  top: calc(48px + 52px * 7);
}
.category-title:nth-child(18) {
  top: calc(48px + 52px * 8);
}
.category-title:nth-child(20) {
  top: calc(48px + 52px * 9);
}

/* On mobile, disable sticky behavior */
@media (max-width: 768px) {
  .category-title {
    position: static;
    background: white;
  }
}
</style>
