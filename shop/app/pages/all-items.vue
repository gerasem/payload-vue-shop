<script setup lang="ts">
import ItemCard from '@/components/item/ItemCard.vue'

definePageMeta({
  layout: 'default'
})

// Fetch all products without category filter
const { data: productsData } = await useAsyncData('all-products', async () => {
  // You'll need to create a GraphQL query for all products
  // For now, this is a placeholder
  return { products: [], totalDocs: 0 }
})

const items = computed(() => productsData.value?.products || [])

usePageSeo({
  title: 'All Products | Store - Browse Our Complete Catalog',
  description:
    'Browse our complete product catalog. Find the perfect item from our wide selection of quality products across all categories.'
})
</script>

<template>
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">All Items</h1>
      <p class="text-gray-600">Browse our complete product catalog</p>
    </div>

    <!-- Items Grid -->
    <div
      v-if="items.length > 0"
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
    >
      <ItemCard v-for="item in items" :key="item.id" :item="item" />
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12">
      <p class="text-gray-500">No products found.</p>
    </div>
  </div>
</template>
