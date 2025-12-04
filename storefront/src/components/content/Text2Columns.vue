<script setup lang="ts">
import Header from '@/components/content/Header.vue'

defineProps<{
  header?: string
  text: string
}>()
</script>

<template>
  <div class="content">
    <Header
      v-if="header"
      :level="2"
      >{{ header }}</Header
    >

    <p
      v-html="text"
      class="content text__paragraph text__paragraph--2-columns"
    ></p>
  </div>
</template>

<style lang="scss">
.text {
  &__paragraph {
    &--2-columns {
      p {
        column-count: 2;
        column-gap: 40px;

        @media (max-width: $screen-md-max) {
          column-count: 1;
        }
      }
    }
  }
}
</style>
