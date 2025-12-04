<script setup lang="ts">
import CategoryTitleNarrow from '@/components/category/CategoryTitleNarrow.vue'
import Header from '@/components/content/Header.vue'
import { useSeoMeta } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

useSeoMeta({
  title: '404 Error',
})

useSeoMeta({
  title: computed(() => t('Error 404')),
  description: computed(
    () => t('Error 404: Nothing found'),
  ),
})
</script>

<template>
  <CategoryTitleNarrow />

  <main class="container is-fluid">
    <Header :level="1">{{ t('Error 404: Nothing found')}}</Header>

    <p>{{ t('Nothing found')}}</p>
  </main>
</template>
