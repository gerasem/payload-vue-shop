<script setup lang="ts">
const localePath = useLocalePath()

defineProps<{
  /** Category link (first category of the product) */
  category?: { title?: string | null; slug: string } | null
  /** Product title (displayed as plain text) */
  productTitle?: string | null
}>()
</script>

<template>
  <nav class="mb-4 text-sm text-gray-500" aria-label="Breadcrumb">
    <ol class="flex items-center gap-1">
      <li v-if="category?.title">
        <NuxtLink
          :to="localePath(`/category/${category.slug}`)"
          class="text-secondary hover:underline"
        >
          {{ category.title }}
        </NuxtLink>
        <span class="mx-1">/</span>
      </li>

      <li class="text-gray-400 truncate">
        {{ productTitle }}
      </li>
    </ol>
  </nav>
</template>
