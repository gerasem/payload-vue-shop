<script setup lang="ts">
import CategoryPreviewHeader from '@/components/category/CategoryPreviewHeader.vue'
import ItemSkeletonContainer from '@/components/item/ItemSkeletonGroup.vue'
import ItemContainer from '@/components/item/ItemContainer.vue'
import type { ICategory } from '@/interfaces/ICategory'
import { useLoaderStore } from '@/stores/LoaderStore'
import { useItemStore } from '@/stores/ItemStore'
import { computed, onMounted } from 'vue'
const props = defineProps<{
  category: ICategory
}>()

onMounted(async () => {
  await itemStore.getItemsForMainPage(props.category, 4)
})

const itemStore = useItemStore()
const loaderStore = useLoaderStore()

const items = computed(() => {
  return itemStore.itemsByCategoryForMainPage(props.category.handle)
})
</script>

<template>
  <div class="category__preview-container">
    <CategoryPreviewHeader :category="category" />

    <ItemSkeletonContainer
      v-if="loaderStore.isLoadingKey(`items-${category.handle}`)"
      :count="4"
    />

    <ItemContainer
      v-else
      :loading="!loaderStore.isLoadingKey(`items-${category.handle}`)"
      :items="items"
    />
  </div>
</template>

<style scoped lang="scss"></style>
