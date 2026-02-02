<script setup lang="ts">
import CategoryGrid from '@/components/CategoryGrid.vue'
import CategorySection from '@/components/category/CategorySection.vue'

// Fetch all categories with their items (4 per category) - SSR friendly
const { data: categoriesWithItems } = await useAsyncData('home-categories-items', async () => {
  return usePayloadCategoriesWithItems(4)
})

// Get all categories for the sidebar
const categories = computed(() => {
  return categoriesWithItems.value?.map(item => item.category) || []
})

usePageSeo({
  title: 'Home | Store - Your Online Shopping Destination',
  description:
    'Welcome to our online store. Browse our wide selection of quality products at great prices. Fast shipping and excellent customer service.'
})
</script>

<template>
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Grid layout: categories on left, content on right -->
    <div class="grid grid-cols-16 gap-12">
      <!-- Left sidebar: Category Grid -->
      <aside class="col-span-3">
        <CategoryGrid 
          :categories="categories"
          :model-value="null" 
        />
      </aside>

      <!-- Main content area: All categories -->
      <main class="col-span-13">
        <template v-if="categoriesWithItems && categoriesWithItems.length > 0">
          <CategorySection
            v-for="categoryData in categoriesWithItems"
            :key="categoryData.category.id"
            :category="categoryData.category"
            :items="categoryData.items"
          />
        </template>
      </main>
    </div>
  </div>
</template>
