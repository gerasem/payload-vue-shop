<script setup lang="ts">
import CategoryTitleNarrow from '@/components/category/CategoryTitleNarrow.vue'
import Header from '@/components/content/Header.vue'
import { useSeoMeta } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

useSeoMeta({
  title: computed(() => t('User Cabinet')),
  description: computed(
    () => t('User Cabinet'),
  ),
})
</script>

<template>
  <CategoryTitleNarrow />

  <main class="container is-fluid">
    <Header :level="1">{{ t('User Cabinet') }}</Header>

    <p class="mt-5">
      This is a placeholder for the user cabinet view. You can implement user profile management,
      order history, and other related features here. Stay tuned for updates!
    </p>
  </main>
</template>

<style scoped lang="scss"></style>
