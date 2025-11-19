<script setup lang="ts">
import CategoryTitleNarrow from '@/components/category/CategoryTitleNarrow.vue'
import BreadcrumbItem from '@/components/breadcrumb/BreadcrumbItem.vue'
import ProductActions from '@/components/item-view/ProductActions.vue'
import Text2Columns from '@/components/content/Text2Columns.vue'
import { useCategoryStore } from '@/stores/CategoryStore'
import Gallery from '@/components/gallery/Gallery.vue'
import { useLoaderStore } from '@/stores/LoaderStore'
import Header from '@/components/content/Header.vue'
import { useItemStore } from '@/stores/ItemStore'
import { richTextToHTML } from '@/utils/richtext'
import { useRoute, useRouter } from 'vue-router'
import type { IItem } from '@/interfaces/IItem'
import ApiService from '@/services/api/api'
import { watch, ref, computed } from 'vue'
import { useSeoMeta } from '@unhead/vue'

const categoryStore = useCategoryStore()
const loaderStore = useLoaderStore()
const itemStore = useItemStore()

const route = useRoute()
const router = useRouter()

const item = computed(() => {
  return (
    itemStore.items.flatMap((g) => g.products).find((p) => p.slug === route.params.handle) || null
  )
})

const category = computed(() => {
  return item.value?.categories
})

watch(item, (value) => {
  if (!value) {
    router.push({ name: '404' })
  }
})

useSeoMeta({
  title: computed(() => item.value?.meta?.title || item.value?.title),
  description: computed(() => item.value?.meta?.description || item.value?.title),
})
</script>

<template>
  <CategoryTitleNarrow />

  <main class="container is-fluid">
    <BreadcrumbItem :category="category" />

    <!-- <pre>{{ item }}</pre> -->
    <div class="columns is-5-tablet is-6-desktop is-8-fullhd is-tablet">
      <div class="column is-three-fifths-widescreen is-half-desktop">
        <Gallery :item="item" />
      </div>

      <div class="column is-desktop">
        <Header :level="1">
          {{ item?.title }}
        </Header>

        <ProductActions :product="item" />
      </div>
    </div>
  </main>

  <section class="section">
    <div class="container is-fullhd">
      <Text2Columns :text="richTextToHTML(item?.description || [])"> </Text2Columns>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
