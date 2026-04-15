<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore'
import { formatEuro } from '@/utils/price'

const { t } = useI18n()
const localePath = useLocalePath()
const cartStore = useCartStore()

withDefaults(
  defineProps<{
    showCheckoutButton?: boolean
    showTotal?: boolean
    showContinueShopping?: boolean
  }>(),
  {
    showCheckoutButton: true,
    showTotal: true,
    showContinueShopping: true
  }
)

const couponInput = ref('')
const applying = ref(false)

watch(
  () => cartStore.couponCode,
  newVal => {
    if (newVal && !couponInput.value) {
      couponInput.value = newVal
    }
  },
  { immediate: true }
)

async function applyCouponCode() {
  applying.value = true
  await cartStore.applyCoupon(couponInput.value)
  applying.value = false
}

function removeCoupon() {
  cartStore.removeCoupon()
  couponInput.value = ''
}
</script>

<template>
  <div class="sticky top-24 shadow-[0_0_40px_10px_rgba(0,0,0,0.05)] bg-white">
    <template v-if="cartStore.isHydrating || cartStore.freeShippingThreshold > 0">
      <div
        class="flex bg-secondary-100 px-6 h-14 justify-center items-center"
        v-if="cartStore.isHydrating || cartStore.totalInEUR < cartStore.freeShippingThreshold"
      >
        <USkeleton v-if="cartStore.isHydrating" class="h-5 w-48 mx-auto" />

        <span v-else class="font-medium text-secondary">
          {{
            t('Free shipping over {amount}', { amount: formatEuro(cartStore.freeShippingThreshold) })
          }}
        </span>
      </div>

      <div v-else class="flex bg-green-50 px-6 h-14 justify-center items-center">
        <span class="font-medium text-green-700"> {{ t('Free shipping applied!') }} </span>
      </div>
    </template>

    <div class="p-6">
      <div class="mb-3 flex gap-4">
        <span class="text-gray-500 flex-1">{{ t('Subtotal') }}</span>

        <div class="flex flex-1">
          <USkeleton v-if="cartStore.isHydrating && !cartStore.count" class="h-5 w-20" />

          <BaseAnimatedPrice v-else :value="cartStore.totalInEUR" class="font-bold" />
        </div>
      </div>

      <div v-if="cartStore.discountPercentage > 0" class="mb-3 flex gap-4 text-green-600">
        <span class="flex-1">{{ t('Discount') }} ({{ cartStore.couponCode }})</span>

        <div class="flex flex-1">
          <span class="font-bold">-<BaseAnimatedPrice :value="cartStore.discountAmount" /></span>
        </div>
      </div>

      <div v-if="showTotal" class="mb-3 flex gap-4">
        <span class="text-gray-500 flex-1">{{ t('Shipping') }}</span>

        <div class="flex flex-1">
          <span v-if="cartStore.shippingTotal === 0" class="font-bold text-green-600">
            {{ t('Free') }}
          </span>

          <BaseAnimatedPrice v-else :value="cartStore.shippingTotal" class="font-bold" />
        </div>
      </div>

      <div v-if="showTotal" class="mb-8 flex gap-4">
        <span class="text-gray-500 flex-1">{{ t('Total') }}</span>

        <div class="flex flex-1">
          <USkeleton v-if="cartStore.isHydrating && !cartStore.count" class="h-7 w-28" />

          <BaseAnimatedPrice v-else :value="cartStore.grandTotal" class="font-bold text-primary" />
        </div>
      </div>

      <div class="mb-6">
        <form @submit.prevent="applyCouponCode" class="flex gap-2 relative">
          <UInput
            v-model="couponInput"
            :placeholder="t('Coupon Code')"
            class="flex-1"
            :disabled="applying"
          />

          <UButton type="submit" :loading="applying" color="neutral" variant="outline">{{
            t('Apply')
          }}</UButton>
        </form>

        <p v-if="cartStore.couponError" class="text-red-500 text-sm mt-2">
          {{ cartStore.couponError }}
        </p>

        <div
          v-if="cartStore.couponCode && !cartStore.couponError"
          class="text-sm mt-2 flex items-center justify-between text-green-600"
        >
          <span>{{ t('Coupon applied:') }} {{ cartStore.couponCode }}</span>

          <button
            type="button"
            @click="removeCoupon"
            class="text-gray-400 hover:text-red-500 underline text-sm"
          >
            {{ t('Remove') }}
          </button>
        </div>
      </div>

      <slot name="action">
        <UButton
          v-if="showCheckoutButton"
          :to="localePath('/checkout')"
          color="primary"
          size="xl"
          block
          :disabled="!cartStore.hasItems"
          class="py-3"
          data-test="checkout-button"
        >
          {{ t('Proceed to Checkout') }}
        </UButton>
      </slot>
    </div>
  </div>
</template>
