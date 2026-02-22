<script setup lang="ts">
import CategoryImage from './CategoryImage.vue'
import CategoryTitle from './CategoryTitle.vue'
import type { ICategory } from '@/types'

defineProps<{
  category: ICategory
}>()
</script>

<template>
  <CategoryImage :category="category" />
  <CategoryTitle :category="category" />
</template>

<style scoped lang="scss"></style>
