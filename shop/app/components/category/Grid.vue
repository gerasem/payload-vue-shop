<script setup lang="ts">

import type { ICategory } from '@/types'

defineProps<{
  categories: ICategory[]
}>()
</script>

<template>
  <div v-if="categories && categories.length" class="flex flex-col h-full w-full">
    <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
  </div>
</template>
