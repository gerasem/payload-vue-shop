<script setup lang="ts">
import CategoryTitleNarrow from '@/components/category/CategoryTitleNarrow.vue'
import Text2Columns from '@/components/content/Text2Columns.vue'
import ItemContainer from '@/components/item/ItemContainer.vue'
import { useContentStore } from '@/stores/ContentStore'
import Header from '@/components/content/Header.vue'
import { useItemStore } from '@/stores/ItemStore'
import { richTextToHTML } from '@/utils/richtext'
import { useSeoMeta } from '@unhead/vue'
import { computed } from 'vue'

const itemStore = useItemStore()
const contentStore = useContentStore()

useSeoMeta({
  title: computed(() => contentStore.allItemsPage?.meta?.title || contentStore.allItemsPage?.title),
  description: computed(
    () => contentStore.allItemsPage?.meta?.description || contentStore.allItemsPage?.title,
  ),
})
</script>

<template>
  <CategoryTitleNarrow />

  <main class="container is-fluid">
    <Header :level="1">All Items</Header>

    <template
      v-for="category in itemStore.items"
      :key="category.category"
    >
      <Header :level="3">{{ category.category.title }}</Header>

      <ItemContainer :items="category.products" />
    </template>
  </main>

  <section class="section">
    <div class="container is-fullhd">
      <Text2Columns :text="richTextToHTML(contentStore.allItemsPage?.content || [])"></Text2Columns>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
