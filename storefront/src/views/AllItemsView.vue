<script setup lang="ts">
import CategoryTitleNarrow from '@/components/category/CategoryTitleNarrow.vue'
import Text2Columns from '@/components/content/Text2Columns.vue'
import ItemContainer from '@/components/item/ItemContainer.vue'
import { useContentStore } from '@/stores/ContentStore'
import { useCategoryStore } from '@/stores/CategoryStore'
import Header from '@/components/content/Header.vue'
import { useItemStore } from '@/stores/ItemStore'
import { richTextToHTML } from '@/utils/richtext'
import { useSeoMeta } from '@unhead/vue'
import { usePageData } from '@/composables/useRouteData'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const itemStore = useItemStore()
const contentStore = useContentStore()
const categoryStore = useCategoryStore()

// Load all categories (SSG and client)
usePageData(async () => {
  const categories = categoryStore.categories
  //await Promise.all(
    // categories.map(cat => itemStore.fetchItemsByCategory(cat.slug))
  //)
})

// Dynamically group items from flat storage
const groupedItems = computed(() => {
  return itemStore.getAllItemsGrouped()
})

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
    <Header :level="1">{{t('All Items')}}</Header>

    <template
      v-for="group in groupedItems"
      :key="group.category.slug"
    >
      <Header :level="3">{{ group.category.title }}</Header>

      <ItemContainer :items="group.products" />
    </template>
  </main>

  <section class="section">
    <div class="container is-fullhd">
      <Text2Columns :text="richTextToHTML(contentStore.allItemsPage?.content || [])"></Text2Columns>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
