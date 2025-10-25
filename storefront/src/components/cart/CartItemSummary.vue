<script setup lang="ts">
// import { convertToLocale } from '@/utils/priceUtils'
// import { HttpTypes } from '@medusajs/types'
// import { computed } from 'vue'

// const props = defineProps<{
//   item: HttpTypes.StoreCartLineItem
// }>()

// const totalPrice = computed(() => {
//   if (props.item.total) {
//     return props.item.total
//   }
//   return props.item.unit_price * (props.item.quantity || 1)
// })
</script>

<template>
  <div v-if="false" class="cart__item is-flex">
    <div class="cart__image-container">
      <img
        :src="item.thumbnail"
        :alt="'item'"
        class="cart__image is-block"
      />
    </div>

    <div class="cart__main">
      <div class="cart__prices is-flex">
        <div class="cart__info">
          <h4 class="cart__title">{{ item.product_title }} : {{ item.title }}</h4>

          <div class="cart__price">
            {{ convertToLocale({ amount: item.unit_price }) }}

            <span>x {{ item.quantity }}</span>
            {{ convertToLocale({ amount: totalPrice }) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart {
  &__item {
    align-items: center;
    padding: 0.5rem 0;
    user-select: none;
  }

  &__image-container {
    overflow: hidden;
  }

  &__image {
    width: 100px;
    height: 75px;
    object-fit: cover;
    background-color: $background-gray;
    transition: 0.2s;
  }

  &__main {
    flex: 1;
    margin: 0 2rem;
  }

  &__price {
    font-size: 1.125rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    width: 100%;

    span {
      font-weight: 400;
      font-size: 1rem;
      margin: 0 20px;
      flex: none;

      @media (max-width: $screen-lg-max) {
        font-size: 0.9rem;
        margin: 0 10px;
      }
    }

    @media (max-width: $screen-lg-max) {
      font-size: 1rem;
    }
  }

  &__title {
    font-size: 1rem;
    margin-right: 40px;
    width: 100%;
    @media (max-width: $screen-lg-max) {
      font-size: 0.9rem;
    }
  }

  &__info {
    display: flex;
    width: 100%;
    @media (max-width: $screen-xl-max) {
      flex-direction: column;
    }
  }
}
</style>
