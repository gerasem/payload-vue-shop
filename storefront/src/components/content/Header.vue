<script setup lang="ts">
import { computed, useSlots } from 'vue'

const props = defineProps<{
  loading?: boolean
  level: 1 | 2 | 3 | 4 | 5 | 6
}>()

const slots = useSlots()
const hasActionSlot = !!slots.action
const tag = computed(() => `h${props.level}`)
</script>

<template>
  <div
    v-if="hasActionSlot"
    class="header__container"
  >
    <component
      :is="tag"
      class="title"
      :class="[`is-${level}`, { 'has-skeleton header__skeleton': loading }]"
    >
      <span v-if="loading">Title</span>
      <slot> </slot>
    </component>
    <div class="header__link">
      <slot name="action"></slot>
    </div>
  </div>

  <component
    v-else
    :is="tag"
    class="title"
    :class="[`is-${level}`, { 'has-skeleton header__skeleton': loading }]"
  >
    <span v-if="loading">Title</span>
    <slot> </slot>
  </component>
</template>

<style lang="scss">
.header {
  &__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    gap: 15px;
    align-items: center;

    & > .title {
      margin-bottom: 0;
    }
  }

  &__link > a {
    color: $color-text;
  }
}
</style>
