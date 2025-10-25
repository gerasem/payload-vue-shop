<script setup lang="ts">
import CartQuantity from '@/components/cart/CartQuantity.vue'
import { useLoaderStore } from '@/stores/LoaderStore'
import { useToastStore } from '@/stores/ToastStore'
import Button from '@/components/form/Button.vue'
import { useCartStore } from '@/stores/CartStore'
import type { HttpTypes } from '@medusajs/types'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const toastStore = useToastStore()

const props = defineProps<{
  selectedVariant: HttpTypes.StoreProductVariant | undefined
  item: HttpTypes.StoreProduct
}>()

const quantity = defineModel<number>('quantity', { default: 1 })
const cartStore = useCartStore()
const loaderStore = useLoaderStore()

const inventoryQuantity = computed(() => {
  if (props.selectedVariant?.inventory_quantity) {
    return props.selectedVariant?.inventory_quantity
  }
  return 1000
})

const quantityError = computed(() => {
  if (props.selectedVariant?.allow_backorder || !props.selectedVariant?.manage_inventory) {
    return false
  }

  return quantity?.value > inventoryQuantity.value
})

// add to cart
const handleAddToCart = async () => {
  if (!props.selectedVariant?.id) {
    return
  }
  await cartStore.addToCart(props.selectedVariant.id, quantity.value)
  toastStore.addSuccess(`Item ${props.item.title} has been added`, '', {
    label: 'Go to Checkout',
    onClick: () => router.push({ name: 'cart' }),
  })
}
</script>

<template>
  <div class="add-to-cart__container">
    <CartQuantity
      v-model:quantity="quantity"
      :variant="selectedVariant"
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
        Add to Cart
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
