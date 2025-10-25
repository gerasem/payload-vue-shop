<script setup lang="ts">
// import { useProductPrice } from '@/composables/useProductPrice'
// import type { HttpTypes } from '@medusajs/types'
// import { computed } from 'vue'

// const props = defineProps<{
//   product: HttpTypes.StoreProduct
//   variant: HttpTypes.StoreProductVariant | undefined
// }>()

// const { getProductPrice } = useProductPrice()

// const prices = computed(() =>
//   getProductPrice({
//     product: props.product,
//     variantId: props.variant?.id,
//   }),
// )

// const selectedPrice = computed(() =>
//   props.variant ? prices.value.variantPrice : prices.value.cheapestPrice,
// )

// const showAvailableCount = computed(() => {
//   return props.variant?.inventory_quantity && props.variant?.inventory_quantity > 10
//     ? 'Available in lagre quantity'
//     : `Only ${props.variant?.inventory_quantity} items left in stock`
// })
</script>

<template>
  <div
    v-if="false || selectedPrice"
    class="is-flex item__price-container"
  >
    <h4
      class="title is-4"
      :class="{ 'has-text-info': selectedPrice.price_type === 'sale' }"
      data-testid="product-price"
      :data-value="selectedPrice.calculated_price_number"
    >
      <span v-if="!variant">From </span>
      {{ selectedPrice.calculated_price }}
    </h4>

    <div v-if="selectedPrice.price_type === 'sale'">
      <p>
        <span class="has-text-grey">Original: </span>
        <span
          class="is-crossed"
          data-testid="original-product-price"
          :data-value="selectedPrice.original_price_number"
        >
          {{ selectedPrice.original_price }}
        </span>
      </p>

      <!--<span class="has-text-info">-{{ selectedPrice.percentage_diff }}%</span>-->
    </div>

    <p v-if="variant">{{ showAvailableCount }}</p>
  </div>
</template>

<style lang="scss" scoped>
.item {
  &__price-container {
    justify-content: space-between;
  }
}
.is-crossed {
  text-decoration: line-through;
}
</style>
