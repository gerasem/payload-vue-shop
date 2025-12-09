<script setup lang="ts">
import CategoryTitleNarrow from '@/components/category/CategoryTitleNarrow.vue'
import Text2Columns from '@/components/content/Text2Columns.vue'
import ItemContainer from '@/components/item/ItemContainer.vue'
import { watch, computed, onServerPrefetch, ref } from 'vue'
import { useRouteData } from '@/composables/useRouteData'
import { useCategoryStore } from '@/stores/CategoryStore'
import Header from '@/components/content/Header.vue'
import { useItemStore } from '@/stores/ItemStore'
import { richTextToHTML } from '@/utils/richtext'
import { useRoute, useRouter } from 'vue-router'
import { useSeoMeta } from '@unhead/vue'
import type { IItem } from '@/interfaces/IItem'

const route = useRoute()
const router = useRouter()

const categoryStore = useCategoryStore()
const itemStore = useItemStore()

const category = computed(() => {
  return categoryStore.categories.find((cat) => cat.slug === route.params.handle) || null
})

const items = ref<IItem[]>([])
const totalItems = ref<number>(0)

// Load items for this category (SSG, mount, and route changes)

onServerPrefetch(async () => {
  console.log('onServerPrefetch called' )
  console.log('onServerPrefetch category.value', category.value )
  if (category.value) {
    const data = await itemStore.fetchItemsByCategory(category.value?.id)

    if(data) {
      items.value = data.docs
      totalItems.value = data.totalDocs
    }
    console.log('SSG: fetch items by category', items.value)
    console.log('SSG: totalDocs', totalItems.value)
  }
})
//
// useRouteData(
//   () => route.params.handle as string,
//   (slug) => itemStore.fetchItemsByCategory(slug),
// )

// Use the getter method instead of searching through items array
const items1 = computed(() => {
  const categorySlug = category.value?.slug
  if (!categorySlug) return []
  return itemStore.getItemsByCategory(categorySlug)
})

watch(category, (value) => {
  if (!value) {
    router.push({ name: '404' })
  }
})

useSeoMeta({
  title: computed(() => category.value?.meta?.title || category.value?.title),
  description: computed(() => category.value?.meta?.description || category.value?.title),
})
</script>

<template>
  <CategoryTitleNarrow />

  <main class="container is-fluid">
    <Header :level="1">
      {{ category?.title }}
    </Header>

    <pre>
      {{items}}
    </pre>
    <ItemContainer :items="items" />
  </main>

  <section class="section">
    <div class="container is-fullhd">
      <Text2Columns :text="richTextToHTML(category?.description || [])" />
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
