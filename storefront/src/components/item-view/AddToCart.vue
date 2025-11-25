<script setup lang="ts">
import CartQuantity from '@/components/cart/CartQuantity.vue'
import { useLoaderStore } from '@/stores/LoaderStore'
import { useToastStore } from '@/stores/ToastStore'
import Button from '@/components/form/Button.vue'
import { useCartStore } from '@/stores/CartStore'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const router = useRouter()
const toastStore = useToastStore()
const { t } = useI18n()

const props = defineProps<{
  productId: number
  variantId: number | null | undefined
  price: number | null | undefined
  itemTitle: string | null | undefined
  inventoryQuantity: number | null | undefined
}>()

const quantity = defineModel<number>('quantity', { default: 1 })
const cartStore = useCartStore()
const loaderStore = useLoaderStore()

const quantityError = computed(() => {
  if (props.inventoryQuantity === null || props.inventoryQuantity === undefined) {
    return false
  }

  return quantity?.value > props.inventoryQuantity
})

// add to cart
const handleAddToCart = async () => {
  loaderStore.startLoading(loaderStore.LOADER_KEYS.ADD_TO_CART)
  await cartStore.add(props.productId, quantity.value, props.variantId)
  toastStore.addSuccess(`Item ${props.itemTitle} has been added`, '', {
    label: 'Go to Checkout',
    onClick: () => router.push({ name: 'cart' }),
  })
  setTimeout(() => {
    loaderStore.stopLoading(loaderStore.LOADER_KEYS.ADD_TO_CART)
  }, 500)
}
</script>

<template>
  <div
    v-if="inventoryQuantity === 0"
    class="notification is-error is-light"
  >
    {{ t('Out of Stock') }}
  </div>

  <div
    v-else
    class="add-to-cart__container"
  >
    <CartQuantity
      v-model:quantity="quantity"
      :inventoryQuantity="inventoryQuantity"
      :quantityError="quantityError"
    />

    <p
      v-if="quantityError"
      class="has-text-danger"
    >
      Only {{ inventoryQuantity }} items are currently in stock
    </p>

    <div
      v-else
      class="add-to-cart__button-container"
    >
      <Button
        v-if="loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.ADD_TO_CART)"
        disabled
        class="is-primary is-loading is-fullwidth"
        data-testid="loading"
      >
        Adding...
      </Button>

      <Button
        v-else
        @click="handleAddToCart"
        class="is-primary is-fullwidth"
        data-testid="add-to-cart"
        icon="bag"
      >
        {{ t('Add to Cart') }}
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add-to-cart {
  &__container {
    display: flex;
    gap: 40px;
    align-items: center;
    margin-bottom: 30px;
  }

  &__button-container {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
  }
}
</style>
