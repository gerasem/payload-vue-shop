<script setup lang="ts">
import CategoryImage from './CategoryImage.vue'
import CategoryTitle from './CategoryTitle.vue'

defineProps<{
  category: any
}>()
</script>

<template>
  <div class="category-card">
    <CategoryImage :category="category" />
    <CategoryTitle :category="category" />
  </div>
</template>
