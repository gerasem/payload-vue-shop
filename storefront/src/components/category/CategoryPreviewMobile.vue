<script setup lang="ts">
import CategoryPreviewHeader from '@/components/category/CategoryPreviewHeader.vue'
import type { ICategory } from '@/interfaces/ICategory'
import type { IItemGrouped } from '@/interfaces/IItem'
import { useItemStore } from '@/stores/ItemStore'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Item from '@/components/item/Item.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import 'swiper/css'

const { t } = useI18n()
const props = defineProps<{
  category: ICategory
}>()

const itemStore = useItemStore()

const items = computed(() => {
  return (
    itemStore.items
      .find((i: IItemGrouped) => i.category.slug === props.category.slug)
      ?.products.slice(0, 4) ?? []
  )
})
</script>

<template>
  <div class="category__preview-container">
    <CategoryPreviewHeader :category="category" />

    <swiper
      :slidesPerView="1.2"
      :space-between="30"
    >
      <swiper-slide
        v-for="item in items"
        :key="item.id"
      >
        <Item :item="item" />
      </swiper-slide>
    </swiper>

    <p v-if="items.length === 0">{{ t('Nothing found') }}</p>
  </div>
</template>

<style scoped lang="scss"></style>
