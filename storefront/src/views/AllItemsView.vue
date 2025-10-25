<script setup lang="ts">
import CategoryTitleNarrow from '@/components/category/CategoryTitleNarrow.vue'
import ItemSkeletonContainer from '@/components/item/ItemSkeletonGroup.vue'
import Text2Columns from '@/components/content/Text2Columns.vue'
import ItemContainer from '@/components/item/ItemContainer.vue'
import { useLoaderStore } from '@/stores/LoaderStore'
import Header from '@/components/content/Header.vue'
import { useItemStore } from '@/stores/ItemStore'
import { useSeoMeta } from '@unhead/vue'
import { onMounted } from 'vue'

onMounted(async () => {
  await itemStore.getAllItems()
})

const itemStore = useItemStore()
const loaderStore = useLoaderStore()

useSeoMeta({
  title: 'All Items',
})
</script>

<template>
  <CategoryTitleNarrow />

  <main class="container is-fluid">
    <Header :level="1">All Items</Header>

    <ItemSkeletonContainer
      v-if="loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.ITEMS)"
      :count="8"
    />

    <template v-else>
      <template
        v-for="category in itemStore.items"
        :key="category.category"
      >
        <Header :level="3">{{ category.category }}</Header>

        <ItemContainer
          :items="category.products"
          :loading="!loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.ITEMS)"
        />
      </template>
    </template>
  </main>

  <section class="section">
    <div class="container is-fullhd">
      <Text2Columns>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores expedita, maiores! Ab cum
        porro voluptates voluptatibus voluptatum. Adipisci architecto at, atque cumque deleniti
        eveniet exercitationem expedita, id illum iure, iusto maiores molestias nisi nobis non rerum
        suscipit tempora unde velit veniam veritatis voluptas voluptate. Adipisci delectus
        distinctio dolores iure maiores, nobis praesentium similique suscipit ullam voluptatum?
        Aliquid animi consectetur consequuntur earum est et labore minima nam odio quidem quis
        temporibus, ut vero. Ad alias amet asperiores assumenda consequatur culpa dignissimos,
        doloribus eos fugit, molestiae nam nemo non officiis quasi quidem repellendus repudiandae
        sapiente, ullam vero voluptatibus. Dolore neque quia ratione!</Text2Columns
      >
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
