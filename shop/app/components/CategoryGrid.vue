<script setup lang="ts">
import CategoryCard from './category/CategoryCard.vue'
import type { ICategory } from '@/types'

defineProps<{
  categories: ICategory[]
}>()
</script>

<template>
  <div v-if="categories && categories.length" class="category-grid">
    <CategoryCard 
      v-for="category in categories" 
      :key="category.id" 
      :category="category"
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
