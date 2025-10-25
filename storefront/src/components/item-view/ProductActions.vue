<script setup lang="ts">
// import ProductPrice from '@/components/item-view/ProductPrice.vue'
// import OptionSelect from '@/components/item-view/OptionSelect.vue'
// import AddToCart from '@/components/item-view/AddToCart.vue'
// import { optionsAsKeymap } from '@/utils/productUtils.ts'
// import { useLoaderStore } from '@/stores/LoaderStore'
// import { isEqual } from '@/utils/productUtils.ts'
// import type { HttpTypes } from '@medusajs/types'
// import { ref, computed, onMounted } from 'vue'

// const loaderStore = useLoaderStore()

// const props = defineProps<{
//   product: HttpTypes.StoreProduct
// }>()

// const options = ref<Record<string, string | undefined>>({})

// // check if only 1 variant
// onMounted(() => {
//   if (props.product.variants?.length === 1) {
//     const variantOptions = optionsAsKeymap(props.product.variants[0].options)
//     options.value = variantOptions
//   }
// })

// // selected variant
// const selectedVariant = computed((): HttpTypes.StoreProductVariant | undefined => {
//   if (!props.product.variants?.length) {
//     return undefined
//   }

//   return props.product.variants.find((v) => {
//     const variantOptions = optionsAsKeymap(v.options)
//     return isEqual(variantOptions, options.value)
//   })
// })

// // valid variant
// const isValidVariant = computed(() => {
//   return (
//     props.product.variants?.some((v) => {
//       const variantOptions = optionsAsKeymap(v.options)
//       return isEqual(variantOptions, options.value)
//     }) || false
//   )
// })

// // check in stock
// const inStock = computed(() => {
//   if (!selectedVariant.value) {
//     return false
//   }
//   if (!selectedVariant.value.manage_inventory || selectedVariant.value.allow_backorder) {
//     return true
//   }
//   return selectedVariant.value.inventory_quantity && selectedVariant.value.inventory_quantity > 0
// })

// // update option value
// const setOptionValue = (optionId: string, value: string) => {
//   options.value = { ...options.value, [optionId]: value }
// }
</script>

<template>
  <div v-if="false" class="container">
    <!-- Product options (if > 1 option) -->
    <div
      v-if="product.variants && product.variants.length > 1"
      class="field"
    >
      <div
        v-for="option in product.options"
        :key="option.id"
        class="control pb-3"
      >
        <OptionSelect
          :option="option"
          :current="options[option.id]"
          @update-option="setOptionValue(option.id, $event)"
          :title="option.title || ''"
          data-testid="product-options"
          :disabled="loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.ADD_TO_CART)"
        />
      </div>
      <br />
    </div>

    <!-- product prices -->
    <ProductPrice
      :product="product"
      :variant="selectedVariant"
    />

    <div
      v-if="!selectedVariant"
      class="notification is-warning is-light mt-2"
    >
      Choose variant
    </div>

    <div
      v-else-if="!inStock || !isValidVariant"
      class="notification is-error is-light"
    >
      Out of Stock
    </div>

    <AddToCart
      v-else
      :selectedVariant="selectedVariant"
      :item="product"
    />
  </div>
</template>

<style scoped></style>
