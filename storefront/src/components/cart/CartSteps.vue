<script setup lang="ts">
import { localePath } from '@/composables/localePath.ts'
import { RouterLink, useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

const currentIndex = ref<number>(1)

const steps = [
  { id: 1, title: '1', heading: t('Shopping Cart'), path: 'cart' },
  { id: 2, title: '2', heading: t('Checkout'), path: 'checkout' },
  { id: 3, title: '3', heading: t('Payment'), path: 'payment' },
]

onMounted(() => {
  switch (route.name) {
    case 'cart':
      currentIndex.value = 1
      break
    case 'checkout':
      currentIndex.value = 2
      break
    case 'payment':
      currentIndex.value = 3
      break
  }
})
</script>

<template>
  <nav class="level cart-steps">
    <div
      v-for="(step, index) in steps"
      :key="step.id"
      class="level-item"
      :class="{ 'cart-steps__item--active': currentIndex >= index + 1 }"
    >
      <RouterLink
        :to="localePath(step.path)"
        class="is-flex cart-steps__container"
      >
        <p class="title cart-steps__title">{{ step.title }}</p>

        <p class="heading">{{ step.heading }}</p>
      </RouterLink>
    </div>
  </nav>
  <div></div>
</template>

<style lang="scss" scoped>
@forward 'bulma/sass/layout/level';

.cart-steps {
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px !important;

  &:before {
    content: '';
    height: 2px;
    width: 75%;
    background-color: $color-secondary;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;

    @media (max-width: $screen-md-max) {
      display: none;
    }
  }

  &__item {
    color: $text-muted;
    &--active {
      color: $color-primary;

      .cart-steps__title {
        background-color: $color-primary;
      }
      .cart-steps__container {
        color: $color-primary;
      }
    }
  }

  &__container {
    align-items: center;
    gap: 10px;
    background: white;
    padding: 0 10px;
    color: $text-muted;
  }

  &__title {
    background-color: $text-muted;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    color: white;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 20px;
  }
}
</style>
