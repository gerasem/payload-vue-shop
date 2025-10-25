<script setup lang="ts">
import CategoryPreviewMobile from '@/components/category/CategoryPreviewMobile.vue'
import CategoryCardSkeleton from '@/components/category/CategoryCardSkeleton.vue'
import CategoryTitleNarrow from '@/components/category/CategoryTitleNarrow.vue'
import CategoryPreview from '@/components/category/CategoryPreview.vue'
import CategoryCard from '@/components/category/CategoryCard.vue'
import Text2Columns from '@/components/content/Text2Columns.vue'
import { useCategoryStore } from '@/stores/CategoryStore'
import { useDevice } from '@/composables/useDevice.ts'
import { useLoaderStore } from '@/stores/LoaderStore'
import { useSeoMeta } from '@unhead/vue'

const { isMobile } = useDevice()
const categoryStore = useCategoryStore()
const loaderStore = useLoaderStore()

useSeoMeta({
  title: 'Home',
})
</script>

<template>
  <template v-if="isMobile">
    <CategoryTitleNarrow />

    <main class="container is-fluid">
      <CategoryPreviewMobile
        v-for="category in categoryStore.categories"
        :key="category.id"
        :category="category"
      />
    </main>
  </template>

  <template v-else>
    <main class="container is-fluid">
      <div class="columns is-5-tablet is-6-desktop is-8-fullhd">
        <div class="column is-one-third-tablet is-one-fifth-desktop">
          <template v-if="loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.CATEGORIES)">
            <CategoryCardSkeleton
              v-for="skeleton in 5"
              :key="skeleton"
            />
          </template>

          <template v-else>
            <CategoryCard
              v-for="category in categoryStore.categories"
              :key="category.id"
              :category="category"
            />
          </template>
        </div>

        <div class="column">
          <CategoryPreview
            v-for="category in categoryStore.categories"
            :key="category.id"
            :category="category"
          />

          <Text2Columns header="About us">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores expedita, maiores! Ab
            cum porro voluptates voluptatibus voluptatum. Adipisci architecto at, atque cumque
            deleniti eveniet exercitationem expedita, id illum iure, iusto maiores molestias nisi
            nobis non rerum suscipit tempora unde velit veniam veritatis voluptas voluptate.
            Adipisci delectus distinctio dolores iure maiores, nobis praesentium similique suscipit
            ullam voluptatum? Aliquid animi consectetur consequuntur earum est et labore minima nam
            odio quidem quis temporibus, ut vero. Ad alias amet asperiores assumenda consequatur
            culpa dignissimos, doloribus eos fugit, molestiae nam nemo non officiis quasi quidem
            repellendus repudiandae sapiente, ullam vero voluptatibus. Dolore neque quia ratione!
          </Text2Columns>
        </div>
      </div>
    </main>
  </template>
</template>

<style scoped lang="scss">
.category {
  &__preview-container {
    margin-bottom: 2rem;
  }
}
</style>
