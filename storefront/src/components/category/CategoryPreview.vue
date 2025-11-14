<script setup lang="ts">
import CategoryPreviewHeader from '@/components/category/CategoryPreviewHeader.vue'
import ItemContainer from '@/components/item/ItemContainer.vue'
import type { ICategory } from '@/interfaces/ICategory'
import type { IItemGrouped } from '@/interfaces/IItem'
import { useItemStore } from '@/stores/ItemStore'
import { computed } from 'vue'
const props = defineProps<{
  category: ICategory
}>()

const itemStore = useItemStore()

const items = computed(() => {
  return (
    itemStore.items
      .find((i: IItemGrouped) => i.category.slug === props.category.slug)
      ?.products.slice(0, 4) ?? []
  )
})
</script>

<template>
  <div class="category__preview-container">
    <CategoryPreviewHeader :category="category" />

    <ItemContainer :items="items" />
  </div>
</template>

<style scoped lang="scss"></style>
