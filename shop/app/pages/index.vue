<script setup lang="ts">
const { data: categoriesWithItems } = await useAsyncData('home-categories-items', async () => {
  return usePayloadCategoriesWithItems(4)
})

const { data: homePage } = await useAsyncData('home-page-content', () => usePayloadPage('home'))

const categories = computed(() => {
  return categoriesWithItems.value?.map(item => item.category) || []
})

usePayloadPageSeo(homePage)

// === Structured Data (JSON-LD) ===
const { injectSchema } = useJsonLd()
const config = useRuntimeConfig()
const siteUrl = useRequestURL().origin

injectSchema(() => {
  if (!categoriesWithItems.value || categoriesWithItems.value.length === 0) return null

  // Create an ItemList for the featured categories
  const itemListElement = categoriesWithItems.value.map((catData, index) => {
    return {
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CollectionPage',
        name: catData.category.title,
        url: `${siteUrl}/category/${catData.category.slug}`
      }
    }
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Featured Categories',
    itemListElement
  }
})
</script>

<template>
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Grid layout: categories on left, content on right -->
    <div class="lg:grid lg:grid-cols-16 lg:gap-12">
      <!-- Left sidebar: Category Grid -->
      <aside class="hidden lg:block lg:col-span-3">
        <CategoryGrid :categories="categories" />
      </aside>

      <!-- Main content area: All categories -->
      <main class="lg:col-span-13">
        <template v-if="categoriesWithItems && categoriesWithItems.length > 0">
          <CategorySection
            v-for="categoryData in categoriesWithItems"
            :key="categoryData.category.id"
            :category="categoryData.category"
            :items="categoryData.items"
          />
        </template>

        <!-- SEO Text from Home Page -->
        <section v-if="homePage?.content">
          <ContentText2Columns :text="richTextToHTML(homePage.content)" />
        </section>

        <!-- Conversion Boxes -->
        <section v-if="homePage?.conversionBoxes">
          <HomeConversionBoxes :boxes="homePage.conversionBoxes" />
        </section>
      </main>
    </div>
  </div>
</template>
