<script setup lang="ts">
// import CategoryTitleNarrow from '@/components/category/CategoryTitleNarrow.vue'
// import BreadcrumbItem from '@/components/breadcrumb/BreadcrumbItem.vue'
// import ProductActions from '@/components/item-view/ProductActions.vue'
// import Text2Columns from '@/components/content/Text2Columns.vue'
// import { useCategoryStore } from '@/stores/CategoryStore'
// import Gallery from '@/components/gallery/Gallery.vue'
// import { useLoaderStore } from '@/stores/LoaderStore'
// import Header from '@/components/content/Header.vue'
// import ApiService from '@/services/api/api'
// import { HttpTypes } from '@medusajs/types'
// import { watch, ref, computed } from 'vue'
// import { useSeoMeta } from '@unhead/vue'
// import { useRoute } from 'vue-router'

// const categoryStore = useCategoryStore()
// const loaderStore = useLoaderStore()

// const item = ref<HttpTypes.StoreProduct | null>(null)

// const route = useRoute()

// watch(
//   () => route.params.handle,
//   async (newHandle) => {
//     item.value = await ApiService.fetchItemByHandle(
//       newHandle as string,
//       loaderStore.LOADER_KEYS.ITEM,
//     )
//     if (item.value && item.value?.categories) {
//       categoryStore.setCurrentCategory(item.value?.categories[0]?.handle)
//     }
//   },
//   { immediate: true },
// )

// useSeoMeta({
//   title: computed(() => item.value?.title),
// })
</script>

<template>
  <CategoryTitleNarrow />

  <main class="container is-fluid">
    <BreadcrumbItem :loading="loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.ITEM)" />

    <div class="columns is-5-tablet is-6-desktop is-8-fullhd is-tablet">
      <div class="column is-three-fifths-widescreen is-half-desktop">
        <Gallery
          :loading="loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.ITEM)"
          :item="item"
        />
      </div>

      <div class="column is-desktop">
        <Header
          :level="1"
          :loading="loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.ITEM)"
          v-if="item"
        >
          {{ item.title }}
        </Header>

        <!-- Skeletons -->
        <div v-if="loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.ITEM)">
          <Header
            :level="4"
            class="block has-skeleton"
          >
            Price
          </Header>

          <Header
            :level="2"
            class="block has-skeleton"
          >
            Add to Cart
          </Header>
        </div>

        <ProductActions
          v-if="item"
          :product="item"
        />
      </div>
    </div>
  </main>

  <section class="section">
    <div class="container is-fullhd">
      <Text2Columns v-if="item"> {{ item.description }} </Text2Columns>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
