<script setup lang="ts">
import CategoryTitle from '@/components/category/CategoryTitle.vue'
import CategoryImage from '@/components/category/CategoryImage.vue'
import type { ICategory } from '@/interfaces/ICategory'

defineProps<{
  category: ICategory
}>()
</script>

<template>
  <CategoryImage :category="category" />

  <CategoryTitle :category="category" />
</template>

<style scoped lang="scss"></style>
