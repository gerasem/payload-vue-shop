<script setup lang="ts">
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
