<script setup lang="ts">
import CategoryTitleNarrow from '@/components/category/CategoryTitleNarrow.vue'
import Text2Columns from '@/components/content/Text2Columns.vue'
import { useCategoryStore } from '@/stores/CategoryStore'
import Header from '@/components/content/Header.vue'
import { useItemStore } from '@/stores/ItemStore'
import { richTextToHTML } from '@/utils/richtext'
import Item from '@/components/item/Item.vue'
import { useSeoMeta } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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

    <div class="columns is-mobile is-multiline is-3">
      <div
        v-for="item in items"
        :key="item.id"
        class="column is-half-tablet is-one-third-desktop is-one-quarter-fullhd"
      >
        <Item :item="item" />
      </div>

      <p
        v-if="items.length === 0"
        class="column"
      >
        {{ t('Nothing found') }}
      </p>
    </div>
  </main>

  <section class="section">
    <div class="container is-fullhd">
      <Text2Columns :text="richTextToHTML(categoryStore.currentCategory?.description || [])" />
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
