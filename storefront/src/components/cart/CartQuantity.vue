<script setup lang="ts">
import Button from '@/components/form/Button.vue'

const props = defineProps<{
  inventoryQuantity: number | null
  quantityError: boolean
}>()

const quantity = defineModel<number>('quantity', { required: true })

const decrementCount = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const incrementCount = () => {
  if (props.inventoryQuantity !== null && quantity.value < props.inventoryQuantity) {
    quantity.value++
  }
}
</script>

<template>
  <div class="cart__quantity-block">
    <Button
      class="is-white"
      icon="dash-lg"
      :disabled="quantity <= 1"
      @click="decrementCount()"
    ></Button>

    <input
      v-model.number="quantity"
      inputmode="numeric"
      class="input cart__input"
      :class="{ 'is-danger': quantityError }"
      min="1"
      pattern="[0-9]*"
      type="number"
      :max="inventoryQuantity !== null ? inventoryQuantity : 1000"
      name="item quantity"
    />

    <Button
      class="is-white"
      icon="plus-lg"
      :disabled="inventoryQuantity && quantity >= inventoryQuantity"
      @click="incrementCount()"
    ></Button>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  &__quantity-block {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__input {
    width: 50px;
    text-align: center;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }

    @media (max-width: $screen-lg-max) {
      font-size: 0.8rem;
      width: 40px;
    }
  }
}
</style>
