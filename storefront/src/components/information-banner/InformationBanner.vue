<script setup lang="ts">
import Icon from '@/components/media/Icon.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const items = [
  { icon: 'bag', text: 'Free Shipping' },
  { icon: '', text: 'More than 50 items' },
  { icon: '', text: 'Fast delivery' },
]
</script>

<template>
  <header class="is-hidden-mobile information-banner__container">
    <div class="container is-fluid">
      <ul class="information-banner__list-container">
        <li
          v-for="item in items"
          :key="item.text"
          class="information-banner__list-item"
        >
          <Icon
            v-if="item.icon"
            :icon="item.icon"
            :width="16"
            :height="16"
          />
          {{ t(item.text) }}
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
    //position: relative;

    /*&:after {
      content: "";
      background: linear-gradient(90deg, transparent 0, #FFF2EB 80%);
      width: 30px;
      height: 40px;
      position: absolute;
      right: 0;
      top: 0;
    }*/
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
  }
}
</style>
