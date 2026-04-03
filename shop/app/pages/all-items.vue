<script setup lang="ts">
const { t } = useI18n()

const { data: pageData } = await useAsyncData('page-all-items', () => usePayloadPage('all-items'))

const { data: categoriesWithItems } = await useAsyncData('all-items-catalog', async () => {
  return usePayloadCategoriesWithItems(8)
})

usePayloadPageSeo(pageData)
</script>

<template>
  <BaseContainer>
    <!-- Page Header (using CMS title if available) -->
    <div class="mb-6">
      <h1 class="text-4xl mb-8">{{ pageData?.title || t('All Items') }}</h1>
      <div v-if="pageData?.content" v-html="richTextToHTML(pageData.content)"></div>
    </div>

    <div v-if="categoriesWithItems && categoriesWithItems.length > 0">
      <CategorySection
        v-for="section in categoriesWithItems"
        :key="section.category.id"
        :category="section.category"
        :items="section.items"
      />
    </div>
  </BaseContainer>
</template>
