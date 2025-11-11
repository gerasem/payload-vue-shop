<script setup lang="ts">
import CategoryTitleNarrow from '@/components/category/CategoryTitleNarrow.vue'
import Text2Columns from '@/components/content/Text2Columns.vue'
import ItemContainer from '@/components/item/ItemContainer.vue'
import { useCategoryStore } from '@/stores/CategoryStore'
import Header from '@/components/content/Header.vue'
import { useItemStore } from '@/stores/ItemStore'
import { richTextToHTML } from '@/utils/richtext'
import { useSeoMeta } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { watch, computed } from 'vue'

const route = useRoute()
const categoryStore = useCategoryStore()
const itemStore = useItemStore()

const items = computed(() => {
  if (categoryStore.currentCategory) {
    return itemStore.itemsByCategory(categoryStore.currentCategory.slug)
  }
  return []
})

watch(
  () => route.params.handle,
  (newHandle) => {
    categoryStore.setCurrentCategory(newHandle as string)
    if (categoryStore.currentCategory) {
      itemStore.getItemsByCategory(categoryStore.currentCategory)
    }
  },
  { immediate: true },
)

useSeoMeta({
  title: computed(() => (categoryStore.currentCategory ? categoryStore.currentCategory.title : '')),
})
</script>

<template>
  <CategoryTitleNarrow />

  <main class="container is-fluid">
    <Header :level="1">
      {{ categoryStore.currentCategory?.title }}
    </Header>

    <ItemContainer :items="items" />
  </main>

  <section class="section">
    <div class="container is-fullhd">
      <Text2Columns :text="richTextToHTML(categoryStore.currentCategory?.description || [])" />
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
