<script setup lang="ts">
import CategoryTitleNarrow from '@/components/category/CategoryTitleNarrow.vue'
import Text2Columns from '@/components/content/Text2Columns.vue'
import { useCategoryStore } from '@/stores/CategoryStore'
import Header from '@/components/content/Header.vue'
import { useItemStore } from '@/stores/ItemStore'
import Item from '@/components/item/Item.vue'
import { useSeoMeta } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const route = useRoute()
const categoryStore = useCategoryStore()
const itemStore = useItemStore()

const items = computed(() => {
  if (categoryStore.currentCategory) {
    return itemStore.itemsByCategory(categoryStore.currentCategory.slug)
  }
  return []
})

watch(
  () => route.params.handle,
  (newHandle) => {
    categoryStore.setCurrentCategory(newHandle as string)
    if (categoryStore.currentCategory) {
      itemStore.getItemsByCategory(categoryStore.currentCategory)
    }
  },
  { immediate: true },
)

useSeoMeta({
  title: computed(() => (categoryStore.currentCategory ? categoryStore.currentCategory.name : '')),
})
</script>

<template>
  <CategoryTitleNarrow />

  <main class="container is-fluid">
    <Header :level="1">
      {{ categoryStore.currentCategory?.title }}
    </Header>

    <div class="columns is-mobile is-multiline is-3">
      <div
        v-for="item in items"
        :key="item.id"
        class="column is-half-tablet is-one-third-desktop is-one-quarter-fullhd"
      >
        <Item :item="item" />
      </div>

      <p
        v-if="items.length === 0"
        class="column"
      >
        {{ t('Nothing found') }}
      </p>
    </div>
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
