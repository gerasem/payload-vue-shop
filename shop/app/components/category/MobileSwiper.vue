<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import type { IItem } from '@/types'

defineProps<{ items: IItem[] }>()
</script>

<template>
  <div class="-mx-4">
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
</template>
