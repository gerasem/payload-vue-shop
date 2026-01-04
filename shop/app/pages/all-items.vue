<script setup lang="ts">
import CategorySection from '@/components/category/CategorySection.vue'

definePageMeta({
  layout: 'default'
})

// Fetch all categories with their items (4 per category) - SSR friendly single query
const { data: categoriesWithItems } = await useAsyncData('all-items', async () => {
  return usePayloadCategoriesWithItems(4)
})

usePageSeo({
  title: 'All Products | Store - Browse Our Complete Catalog',
  description:
    'Browse our complete product catalog. Discover the best products from all our categories.'
})
</script>

<template>
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Page Header -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">All Items</h1>
    </div>

    <!-- Category Sections -->
    <div v-if="categoriesWithItems && categoriesWithItems.length > 0">
      <CategorySection
        v-for="section in categoriesWithItems"
        :key="section.category.id"
        :category="section.category"
        :items="section.items"
      />
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12">
      <p class="text-gray-500">No products found.</p>
    </div>
  </div>
</template>
