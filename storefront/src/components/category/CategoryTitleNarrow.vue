<script setup lang="ts">
import CategorySkeletonGroup from '@/components/category/CategorySkeletonGroup.vue'
import CategoryTitle from '@/components/category/CategoryTitle.vue'
import { useCategoryStore } from '@/stores/CategoryStore'
import { useLoaderStore } from '@/stores/LoaderStore'

const categoryStore = useCategoryStore()
const loaderStore = useLoaderStore()
</script>

<template>
  <div class="is-full category__container">
    <CategorySkeletonGroup
      v-if="loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.CATEGORIES)"
      :count="5"
    />

    <template v-else>
      <CategoryTitle
        v-for="category in categoryStore.categories"
        :key="category.id"
        :category="category"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
.category {
  &__container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    background: $color-categories-background;
    gap: 15px;
    padding: 0.75rem;
    margin-bottom: 2rem;
    min-height: 50px;
    align-items: center;
  }

  &__title {
    padding-bottom: 0;
    padding-top: 0;
  }
}
</style>
