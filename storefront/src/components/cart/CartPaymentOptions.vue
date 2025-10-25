<script setup lang="ts">
// import RadioGroup from '@/components/form/RadioGroup.vue'
// import { paymentProviderMap } from '@/utils/paymentUtils'
// import Header from '@/components/content/Header.vue'
// import { useCartStore } from '@/stores/CartStore'
// import { HttpTypes } from '@medusajs/types'
// import { computed, onMounted } from 'vue'
// import { useI18n } from 'vue-i18n'

// const cartStore = useCartStore()

// onMounted(async () => {
//   if (!cartStore.paymentOptions) {
//     await cartStore.getPaymentOptions()
//   }
// })
// const { t } = useI18n()

// defineEmits<{
//   (e: 'update:paymentMethod', value: string): void
//   (e: 'change'): void
// }>()

// const paymentMethod = defineModel<string>('paymentMethod', { required: true })

// const paymentItems = computed(() => {
//   console.log('cartStore.paymentProviders', cartStore.paymentOptions)
//   if (!cartStore.paymentOptions) {
//     return []
//   }
//   return cartStore.paymentOptions
//     .filter((provider: HttpTypes.StorePaymentProvider) => provider.is_enabled)
//     .map((provider) => ({
//       id: provider.id,
//       name: t(paymentProviderMap[provider.id] || provider.id),
//       value: provider.id,
//     }))
// })
</script>

<template>
  <div v-if="false">
    <Header
      :level="3"
      class="mt-6"
      >{{ t('Payment') }}</Header
    >

    <template v-if="!paymentItems.length">
      <div class="skeleton-lines">
        <div></div>
      </div>
      <div class="mt-5 skeleton-lines">
        <div></div>
      </div>
    </template>

    <RadioGroup
      v-else
      v-model="paymentMethod"
      name="payment_option"
      :items="paymentItems"
      @change="$emit('change')"
      required
    />
  </div>
</template>

<style lang="scss" scoped></style>
