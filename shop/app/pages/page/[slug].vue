<script setup lang="ts">
import { richTextToHTML } from '@/utils/richtext'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

// Fetch page data with SSR
const { data: pageData } = await useAsyncData(`page-${slug.value}`, () =>
  usePayloadPage(slug.value)
)

// Handle page not found
if (!pageData.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}

// Set page SEO metadata
usePayloadPageSeo(pageData)

// Convert rich text to HTML
const contentHTML = computed(() =>
  pageData.value?.content ? richTextToHTML(pageData.value.content) : ''
)
</script>

<template>
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <article v-if="pageData">
      <!-- Page Title -->
      <h1 class="text-4xl md:text-5xl font-bold mb-8">{{ pageData.title }}</h1>

      <!-- Page Content (Rich Text) -->
      <div
        v-if="contentHTML"
        class="prose prose-lg prose-gray max-w-none mb-12"
        v-html="contentHTML"
      />
    </article>
  </div>
</template>
