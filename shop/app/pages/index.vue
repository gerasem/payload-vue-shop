<script setup lang="ts">
import CategoryGrid from '@/components/CategoryGrid.vue'
import CategorySection from '@/components/category/CategorySection.vue'

// Fetch all categories with their items (6 per category) - SSR friendly
const { data: categoriesWithItems } = await useAsyncData('home-categories-items', async () => {
  return usePayloadCategoriesWithItems(6)
})

// Selected category state (default to first category)
const selectedCategoryId = ref<number | null>(null)

// Set default selected category on mount
onMounted(() => {
  if (categoriesWithItems.value && categoriesWithItems.value.length > 0) {
    selectedCategoryId.value = categoriesWithItems.value[0]!.category.id
  }
})

// Get currently selected category data
const selectedCategoryData = computed(() => {
  if (!selectedCategoryId.value || !categoriesWithItems.value) return null
  return categoriesWithItems.value.find(cat => cat.category.id === selectedCategoryId.value)
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
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Left sidebar: Category Grid -->
      <aside class="lg:col-span-4 xl:col-span-3">
        <CategoryGrid 
          v-model="selectedCategoryId"
          :categories="categories"
          clickable
        />
      </aside>

      <!-- Main content area: Selected category products -->
      <main class="lg:col-span-8 xl:col-span-9">
        <CategorySection
          v-if="selectedCategoryData"
          :category="selectedCategoryData.category"
          :items="selectedCategoryData.items"
        />
        
        <!-- Loading/Empty state -->
        <div v-else class="bg-gray-50 rounded-lg p-8 text-center text-gray-500">
          <p>Loading categories...</p>
        </div>
      </main>
    </div>
  </div>
</template>
