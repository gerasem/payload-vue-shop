<script setup lang="ts">
import CategoryPreviewMobile from '@/components/category/CategoryPreviewMobile.vue'
import CategoryTitleNarrow from '@/components/category/CategoryTitleNarrow.vue'
import CategoryPreview from '@/components/category/CategoryPreview.vue'
import CategoryCard from '@/components/category/CategoryCard.vue'
import Text2Columns from '@/components/content/Text2Columns.vue'
import { useCategoryStore } from '@/stores/CategoryStore'
import { useContentStore } from '@/stores/ContentStore'
import { useItemStore } from '@/stores/ItemStore'
import { useDevice } from '@/composables/useDevice.ts'
import { richTextToHTML } from '@/utils/richtext'
import { useSeoMeta } from '@unhead/vue'
import { usePageData } from '@/composables/useRouteData'
import { computed } from 'vue'

const { isMobile } = useDevice()
const categoryStore = useCategoryStore()
const contentStore = useContentStore()
const itemStore = useItemStore()

// Load items for all categories (SSG and client)
usePageData(async () => {
  const categories = categoryStore.categories
  await Promise.all(
    categories.map(cat => itemStore.fetchItemsByCategory(cat.slug))
  )
})

// Get items for a specific category (first 4 items)
const getCategoryItems = (categorySlug: string) => {
  return itemStore.getItemsByCategory(categorySlug).slice(0, 4)
}

useSeoMeta({
  title: computed(() => contentStore.homePage?.meta?.title || contentStore.homePage?.title),
  description: computed(
    () => contentStore.homePage?.meta?.description || contentStore.homePage?.title,
  ),
})
</script>

<template>
  <template v-if="isMobile">
    <CategoryTitleNarrow />

    <main class="container is-fluid">
      <CategoryPreviewMobile
        v-for="category in categoryStore.categories"
        :key="category.id"
        :category="category"
        :items="getCategoryItems(category.slug)"
      />
    </main>
  </template>

  <main
    v-else
    class="container is-fluid"
  >
    <div class="columns is-5-tablet is-6-desktop is-8-fullhd">
      <div class="column is-one-third-tablet is-one-fifth-desktop">
        <CategoryCard
          v-for="category in categoryStore.categories"
          :key="category.id"
          :category="category"
        />
      </div>

      <div class="column">
        <CategoryPreview
          v-for="category in categoryStore.categories"
          :key="category.id"
          :category="category"
          :items="getCategoryItems(category.slug)"
        />

        <Text2Columns :text="richTextToHTML(contentStore.homePage?.content || [])"> </Text2Columns>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.category {
  &__preview-container {
    margin-bottom: 2rem;
  }
}
</style>
