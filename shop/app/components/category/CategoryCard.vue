<script setup lang="ts">
import CategoryImage from './CategoryImage.vue'
import CategoryTitle from './CategoryTitle.vue'
import type { ICategory } from '@/types'

defineProps<{
  category: ICategory
  isActive?: boolean
  clickable?: boolean
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <div 
    class="category-card"
    :class="{ 'category-card--active': isActive }"
    @click="emit('click')"
  >
    <CategoryImage :category="category" :clickable="clickable" />
    <CategoryTitle :category="category" :clickable="clickable" />
  </div>
</template>

<style scoped lang="scss">
.category-card {
  cursor: pointer;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
  opacity: 0.6;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
    opacity: 1;
  }

  &--active {
    background-color: rgba(var(--ui-primary-rgb), 0.05);
    opacity: 1;
  }
}
</style>
