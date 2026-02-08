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
usePageSeo({
  title: pageData.value.meta?.title || pageData.value.title || '',
  description: pageData.value.meta?.description || '',
  image: pageData.value.meta?.image?.url || undefined
})

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

      <!-- Layout Blocks -->
      <div v-if="pageData.layout && pageData.layout.length" class="space-y-12">
        <!-- TODO: Render layout blocks dynamically -->
        <!-- This will need block components for each block type -->
        <div
          v-for="(block, index) in pageData.layout"
          :key="index"
          class="border-l-4 border-gray-200 pl-6"
        >
          <p class="text-sm text-gray-500 font-mono">Block: {{ block.__typename }}</p>
        </div>
      </div>
    </article>
  </div>
</template>
