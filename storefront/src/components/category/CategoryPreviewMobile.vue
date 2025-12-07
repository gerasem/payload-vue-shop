<script setup lang="ts">
import CategoryPreviewHeader from '@/components/category/CategoryPreviewHeader.vue'
import type { ICategory } from '@/interfaces/ICategory'
import type { IItem } from '@/interfaces/IItem'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Item from '@/components/item/Item.vue'
import { useI18n } from 'vue-i18n'
import 'swiper/css'

const { t } = useI18n()

defineProps<{
  category: ICategory
  items: IItem[]
}>()
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
