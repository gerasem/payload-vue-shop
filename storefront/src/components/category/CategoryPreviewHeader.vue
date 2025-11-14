<script setup lang="ts">
import type { ICategory } from '@/interfaces/ICategory'
import { localePath } from '@/composables/localePath'
import Header from '@/components/content/Header.vue'
import { useI18n } from 'vue-i18n'

defineProps<{
  category: ICategory
}>()

const { t } = useI18n()
</script>

<template>
  <Header :level="2">
    {{ category.title }}
    <template #action>
      <RouterLink :to="localePath(`category/${category.slug}`)">
        {{ t('Show all') }}
        {{ category.title }}
      </RouterLink>
    </template>
  </Header>
</template>

<style scoped lang="scss"></style>
