<script setup lang="ts">
import { useCategoryStore } from '@/stores/CategoryStore'
import { localePath } from '@/composables/localePath'
import Icon from '@/components/media/Icon.vue'

const categoryStore = useCategoryStore()
defineProps<{
  loading?: boolean
}>()
</script>

<template>
  <nav
    class="breadcrumb"
    aria-label="breadcrumbs"
  >
    <ul>
      <template v-if="loading">
        <li class="breadcrumb__skeleton">
          <span class="is-skeleton">Loading...</span>
        </li>
      </template>
      <template v-else>
        <li v-if="categoryStore.currentCategory">
          <RouterLink :to="localePath(`category/${categoryStore.currentCategory.handle}`)">
            <Icon
              icon="arrow-left"
              class="pr-2"
            />
            {{ categoryStore.currentCategory.name }}
          </RouterLink>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.breadcrumb__skeleton {
  gap: 10px;
  padding-right: 10px;
}
</style>
