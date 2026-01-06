<script setup lang="ts">
import CategoryCard from './category/CategoryCard.vue'
import type { ICategory } from '@/types'

const props = defineProps<{
  modelValue: number | null
  categories: ICategory[]
  clickable?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

function selectCategory(categoryId: number) {
  emit('update:modelValue', categoryId)
}
</script>

<template>
  <div v-if="categories && categories.length" class="category-grid">
    <CategoryCard 
      v-for="category in categories" 
      :key="category.id" 
      :category="category"
      :is-active="modelValue === category.id"
      :clickable="clickable"
      @click="selectCategory(category.id)"
    />
  </div>
</template>

<style scoped>
.category-grid {
  display: flex;
  flex-direction: column;
  gap: 0;
}
</style>
