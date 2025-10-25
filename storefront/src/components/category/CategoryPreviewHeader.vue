<script setup lang="ts">
import type { ICategory } from '@/interfaces/ICategory'
import { localePath } from '@/composables/localePath'
import { useLoaderStore } from '@/stores/LoaderStore'
import Header from '@/components/content/Header.vue'
import { useI18n } from 'vue-i18n'

const loaderStore = useLoaderStore()

defineProps<{
  category: ICategory
}>()

const { t } = useI18n()
</script>

<template>
  <Header
    :level="2"
    :loading="loaderStore.isLoadingKey(`items-${category.handle}`)"
  >
    {{ category.name }}
    <template #action>
      <div
        v-if="loaderStore.isLoadingKey(`items-${category.handle}`)"
        class="skeleton-lines"
      >
        <div></div>
      </div>

      <RouterLink
        v-else
        :to="localePath(`category/${category.handle}`)"
      >
        {{ t('Show all') }}
        {{ category.name }}
      </RouterLink>
    </template>
  </Header>
</template>

<style scoped lang="scss"></style>
