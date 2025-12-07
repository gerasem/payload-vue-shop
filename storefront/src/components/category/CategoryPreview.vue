<script setup lang="ts">
import CategoryPreviewHeader from '@/components/category/CategoryPreviewHeader.vue'
import ItemContainer from '@/components/item/ItemContainer.vue'
import type { ICategory } from '@/interfaces/ICategory'
import type { IItem } from '@/interfaces/IItem'

defineProps<{
  category: ICategory
  items: IItem[]
}>()
</script>

<template>
  <div class="category__preview-container">
    <CategoryPreviewHeader :category="category" />

    <ItemContainer :items="items" />
  </div>
</template>

<style scoped lang="scss"></style>
