<script setup lang="ts">
import ItemCard from '@/components/item/ItemCard.vue'
import { richTextToHTML } from '@/utils/richtext'
import type { ICategory } from '@/types'

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const slug = computed(() => route.params.slug as string)

// Fetch category data first to get ID
const { data: categories } = await useAsyncData('categories-for-products', () =>
  usePayloadCategories()
)

// Find current category
const currentCategory = computed(() =>
  categories.value?.find((cat: ICategory) => cat.slug === slug.value)
)

// Redirect to 404 if category not found
if (!currentCategory.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Category not found'
  })
}

// Fetch products for this category
const { data: productsData } = await useAsyncData(`products-${slug.value}`, async () => {
  if (!currentCategory.value?.id) return { products: [], totalDocs: 0 }
  return usePayloadProducts(String(currentCategory.value.id))
})

const items = computed(() => productsData.value?.products || [])

// Convert rich text description to HTML
const descriptionHTML = computed(() => {
  if (!currentCategory.value?.description) return ''
  return richTextToHTML(currentCategory.value.description)
})

usePageSeo({
  title: computed(() => `${currentCategory.value?.title || slug.value} | Store`),
  description: computed(() => currentCategory.value?.description || `Browse ${slug.value} products`)
})
</script>

<template>
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Category Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">
        {{ currentCategory?.title || slug }}
      </h1>
    </div>

    <!-- Items Grid -->
    <div
      v-if="items.length > 0"
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12"
    >
      <ItemCard v-for="item in items" :key="item.id" :item="item" />
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12 mb-12">
      <p class="text-gray-500">No products found in this category.</p>
    </div>

    <!-- Category Description (2 columns) -->
    <div v-if="descriptionHTML" class="prose prose-gray max-w-none">
      <div class="columns-1 md:columns-2 gap-8" v-html="descriptionHTML" />
    </div>
  </div>
</template>

<style>
/* Rich text styling */
.prose h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.prose p {
  color: #374151;
  margin-bottom: 1rem;
  line-height: 1.75;
}

.prose ul,
.prose ol {
  margin-bottom: 1rem;
  margin-left: 1.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose a {
  color: var(--color-primary);
  text-decoration: none;
}

.prose a:hover {
  text-decoration: underline;
}

.prose strong {
  font-weight: 600;
}
</style>
