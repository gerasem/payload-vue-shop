<script setup lang="ts">
const { t } = useI18n()

// Fetch page data for SEO (optional, to keep title from CMS if desired)
const { data: pageData } = await useAsyncData('page-all-items', () => usePayloadPage('all-items'))

usePayloadPageSeo(pageData)
</script>

<template>
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Page Header (using CMS title if available) -->
    <div class="mb-6">
      <h1 class="text-4xl mb-8">{{ pageData?.title || t('All Items') }}</h1>
      <div v-if="pageData?.content" v-html="richTextToHTML(pageData.content)"></div>
    </div>

    <!-- Render Catalog instead of generic page content -->
    <CatalogAllItemsCatalog />
  </div>
</template>
