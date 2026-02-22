<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import type { ICategory, IItem } from '@/types'
import ItemCard from '@/components/item/ItemCard.vue'

const localePath = useLocalePath()
const { t } = useI18n()

defineProps<{
  category: ICategory
  items: IItem[]
}>()
</script>

<template>
  <section class="mb-12">
    <!-- Category Header -->
    <div class="flex items-center justify-between mb-6 group">
      <h2 class="text-4xl font-bold text-gray-900">
        {{ category.title }}
      </h2>
      <NuxtLink
        :to="localePath(`/category/${category.slug}`)"
        class="text-gray-900 hover:text-primary text-sm transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        {{ t('View all') }} →
      </NuxtLink>
    </div>

    <!-- Mobile Swiper -->
    <div class="md:hidden -mx-4">
      <ClientOnly>
        <swiper
          :slides-per-view="1.4"
          :space-between="16"
          :slides-offset-before="16"
          :slides-offset-after="16"
        >
          <swiper-slide v-for="item in items" :key="item.id">
            <ItemCard :item="item" />
          </swiper-slide>
        </swiper>
      </ClientOnly>
    </div>

    <!-- Desktop Grid -->
    <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
      <ItemCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </section>
</template>
