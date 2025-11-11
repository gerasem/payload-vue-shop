<script setup lang="ts">
import CategoryTitleNarrow from '@/components/category/CategoryTitleNarrow.vue'
import Text2Columns from '@/components/content/Text2Columns.vue'
import ItemContainer from '@/components/item/ItemContainer.vue'
import Header from '@/components/content/Header.vue'
import { useItemStore } from '@/stores/ItemStore'
import { useSeoMeta } from '@unhead/vue'
import { onMounted } from 'vue'

onMounted(async () => {
  await itemStore.getAllItems()
})

const itemStore = useItemStore()

useSeoMeta({
  title: 'All Items',
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

      <ItemContainer
        v-if="category.products.length"
        :items="category.products"
      />
    </template>
  </main>

  <section class="section">
    <div class="container is-fullhd">
      <Text2Columns text=""> </Text2Columns>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
