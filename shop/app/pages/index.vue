<script setup lang="ts">
import CategoryGrid from '@/components/CategoryGrid.vue'
usePageSeo({
  title: 'Home | Store - Your Online Shopping Destination',
  description:
    'Welcome to our online store. Browse our wide selection of quality products at great prices. Fast shipping and excellent customer service.'
})
</script>

<template>
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Grid layout: categories on left, content on right (future) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Left sidebar: Category Grid -->
      <aside class="lg:col-span-4 xl:col-span-3">
        <CategoryGrid />
      </aside>

      <!-- Main content area (placeholder for future content) -->
      <main class="lg:col-span-8 xl:col-span-9">
        <div class="bg-gray-50 rounded-lg p-8 text-center text-gray-500">
          <p>Main content area - coming soon</p>
        </div>
      </main>
    </div>
  </div>
</template>
