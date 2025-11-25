<script setup lang="ts">
import CartQuantity from '@/components/cart/CartQuantity.vue'
import defaultImage from '@/assets/images/_default-image.svg'
import type { ICartItem } from '@/interfaces/ICartItem'
import { localePath } from '@/composables/localePath'
import { convertToLocale } from '@/utils/priceUtils'
import Button from '@/components/form/Button.vue'
import { useCartStore } from '@/stores/CartStore'
import { formatEuro } from '@/utils/priceUtils'
import { computed, ref, watch } from 'vue'
import debounce from 'lodash.debounce'

const props = defineProps<{
  item: ICartItem
}>()

const cartStore = useCartStore()

const inventoryQuantityFromApi = ref<number | null>(null)
const loadingQuantity = ref<boolean>(false)
const loadingDelete = ref<boolean>(false)

const quantity = defineModel<number>('quantity', { default: 1 })
quantity.value = props.item.qty

const deleteItem = async () => {
  // loadingDelete.value = true
  // await cartStore.removeItem(props.item)
  // loadingDelete.value = false
}

const changeItemCount = async () => {
  // if (!quantityError.value && typeof quantity.value === 'number') {
  //   loadingQuantity.value = true
  //   await cartStore.updateItemQuantity(props.item.id, quantity.value)
  //   loadingQuantity.value = false
  // }
  // if (inventoryQuantityFromApi.value === null) {
  //   inventoryQuantityFromApi.value = await cartStore.getItemQuantity(
  //     props.item.product_id || '',
  //     props.item.variant_id || '',
  //   )
  // }
}

const inventoryQuantity = computed(() => {
  // if (inventoryQuantityFromApi.value !== null) {
  //   return inventoryQuantityFromApi.value
  // }
  return 1000
})

const quantityError = computed(() => {
  // if (props.item.variant?.allow_backorder || !props.item.variant?.manage_inventory) {
  //   return false
  // }

  return quantity?.value > inventoryQuantity.value
})

const totalPrice = computed(() => {
  // if (props.item.total) {
  //   return props.item.total
  // }
  return props.item.unit_price * (props.item.quantity || 1)
})

const getImage = (imageUrl: string | null | undefined) => {
  return import.meta.env.VITE_BACKEND_DOMAIN + imageUrl || defaultImage
}

watch(
  quantity,
  debounce(() => {
    console.log('changeItemCount debounce')
    changeItemCount()
  }, 500),
)
</script>

<template>
  <div class="cart__item is-flex">
    <RouterLink :to="localePath(`item/${item.slug}`)">
      <div class="cart__image-container">
        <img
          :src="getImage(item.image)"
          :alt="item.title"
          class="cart__image is-block"
        />
      </div>
    </RouterLink>

    <div class="cart__main">
      <div class="cart__prices is-flex">
        <div class="cart__info">
          <h4 class="cart__title">
            {{ item.title }}
            <em v-if="item.hasVariant"> : {{ item.variantTitle }} </em>
          </h4>

          <div class="cart__price">
            {{ formatEuro(item.priceInEUR) }}
            <span
              v-if="loadingQuantity"
              class="loading-spinner"
            ></span>
            <template v-else>
              <span>x {{ item.qty }}</span>
              {{ formatEuro(item.priceInEUR * item.qty) }}
            </template>
          </div>
        </div>

        <!-- <div
          v-if="false"
          class="cart__old-price"
        >
          {{ 1200 }}
        </div>

        <div
          class="cart__discount"
          v-if="false"
        >
          %
        </div> -->
      </div>
    </div>

    <CartQuantity
      v-model:quantity.number="quantity"
      :inventoryQuantity="inventoryQuantity"
      :quantityError="quantityError"
      :loading="loadingQuantity"
    />

    <Button
      class="is-white"
      icon="x-lg"
      @click="deleteItem()"
      :class="{
        'is-loading': loadingDelete,
      }"
    ></Button>
  </div>
</template>

<style scoped lang="scss">
.cart {
  &__item {
    align-items: center;
    padding: 1rem 1rem 1rem 0;
    position: relative;
    user-select: none;

    &:not(:last-of-type):after {
      position: absolute;
      content: '';
      width: calc(100% - 2rem);
      left: 1rem;
      bottom: 0;
      height: 1px;
      background: $background-gray;
    }
  }

  &__input {
    width: 50px;
  }

  &__image-container {
    overflow: hidden;
  }

  &__image {
    width: 200px;
    height: 150px;
    object-fit: cover;
    background-color: $background-gray;
    transition: 0.2s;

    @media (max-width: $screen-lg-max) {
      width: 130px;
      height: 100px;
    }

    @media (max-width: $screen-md-max) {
      width: 100px;
      height: 75px;
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  &__button {
    cursor: pointer;
    margin-top: 2rem;
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

  &__old-price {
    text-decoration: line-through;
    margin: 0 2rem;
  }

  &__discount {
    color: $color-primary;
  }

  &__title {
    font-size: 1rem;
    margin-right: 40px;

    @media (max-width: $screen-lg-max) {
      font-size: 0.9rem;
    }
  }

  &__actions {
    align-items: center;
  }

  &__info {
    display: flex;

    @media (max-width: $screen-xl-max) {
      flex-direction: column;
    }
  }
}
</style>
