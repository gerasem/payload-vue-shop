<script setup lang="ts">
import { useContentStore } from '@/stores/ContentStore'

const contentStore = useContentStore()
</script>

<template>
  <header class="is-hidden-mobile information-banner__container">
    <div class="container is-fluid">
      <ul class="information-banner__list-container">
        <li
          v-for="(item, index) in contentStore.informationBanner"
          :key="item.id ?? index"
          class="information-banner__list-item"
        >
          <span
            v-if="typeof item.icon === 'object' && item.icon?.svgContent"
            v-html="item.icon.svgContent"
          ></span>

          {{ item.text }}
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
.information-banner {
  &__container {
    height: 40px;
    background: $color-categories-background;
    align-content: center;
    color: $color-light-gray;
    font-size: 15px;
    position: relative;

    &:after {
      content: '';
      background: linear-gradient(90deg, transparent 0, darken($color-categories-background, 5%));
      width: 30px;
      height: 40px;
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  &__list-container {
    display: flex;
    justify-content: space-around;
    gap: 25px;
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 0 12px;
    height: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__list-item {
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;
    display: flex;
    gap: 7px;

    span {
      display: flex;
    }
  }

  &__lines {
    justify-self: center;
    width: 30%;
  }

  &__line {
    width: 100% !important;
  }
}
</style>
