<script setup lang="ts">
const { t } = useI18n()

// Fetch page data for SEO (optional, to keep title from CMS if desired)
const { data: pageData } = await useAsyncData('page-all-items', () => usePayloadPage('all-items'))

usePageSeo({
  title: pageData.value?.meta?.title || t('All Items'),
  description: pageData.value?.meta?.description || t('Browse our complete catalog')
})
</script>

<template>
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Page Header (using CMS title if available) -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ pageData?.title || t('All Items') }}</h1>
    </div>

    <!-- Render Catalog instead of generic page content -->
    <AllItemsCatalog />
  </div>
</template>
