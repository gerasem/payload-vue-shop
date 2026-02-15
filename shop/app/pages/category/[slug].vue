<script setup lang="ts">
import type { ICategory } from '@/types'

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const { t } = useI18n()
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

// Sort state
const sort = ref('popularity')
const priceRange = ref<[number, number] | null>(null)

// Fetch products for this category (Fetch ALL to calculate ranges client-side)
const { data: productsData } = await useAsyncData(
  `products-${slug.value}`,
  async () => {
    if (!currentCategory.value?.id) return { products: [], totalDocs: 0 }
    // Pass null for priceRange to fetch all products in category
    return usePayloadProducts(
      String(currentCategory.value.id),
      sort.value,
      null 
    )
  },
  {
    watch: [sort] // Only re-fetch on sort change (or maybe even sort client side?)
    // Actually, sort might need API if pagination is involved. But we fetch all (limit 10000).
    // Let's keep sort on server for now, but price filtering client side.
  }
)

const allItems = computed(() => productsData.value?.products || [])

// Calculate dynamic min/max from all items
const minProductPrice = computed(() => {
  if (!allItems.value.length) return 0
  return Math.min(...allItems.value.map(p => p.priceInEUR))
})

const maxProductPrice = computed(() => {
  if (!allItems.value.length) return 50000 // Default 500 EUR
  return Math.max(...allItems.value.map(p => p.priceInEUR))
})

// Initialize price range once data is loaded
// Watch for data changes to set initial range if not set
watch(productsData, (data) => {
  if (data?.products?.length && !priceRange.value) {
     priceRange.value = [minProductPrice.value, maxProductPrice.value]
  }
}, { immediate: true })


const items = computed(() => {
  let filtered = allItems.value

  // Client-side price filtering
  if (priceRange.value) {
    filtered = filtered.filter(item => 
      item.priceInEUR >= priceRange.value![0] && 
      item.priceInEUR <= priceRange.value![1]
    )
  }

  return filtered
})

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
    <CategoryFilters 
      v-if="priceRange && allItems.length > 0"
      v-model="sort" 
      v-model:price-range="priceRange" 
      :min="minProductPrice"
      :max="maxProductPrice"
    />

    <div
      v-if="items.length > 0"
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12"
    >
      <ItemCard v-for="item in items" :key="item.id" :item="item" />
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12 mb-12">
      <p class="text-gray-500">{{ t('No products in category') }}</p>
    </div>

    <!-- Category Description (2 columns) -->
    <div v-if="descriptionHTML" class="prose prose-gray max-w-none">
      <div class="columns-1 md:columns-2 gap-8" v-html="descriptionHTML" />
    </div>
  </div>
</template>

