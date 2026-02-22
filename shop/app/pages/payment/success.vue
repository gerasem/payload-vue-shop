<script setup lang="ts">
definePageMeta({
  layout: 'default',
  ssr: false
})

const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const cartStore = useCartStore()
const checkoutStore = useCheckoutStore()

usePageSeo({
  title: computed(() => t('Order confirmed')),
  description: computed(() => t('Thank you for your order!'))
})

// Stripe redirects here with ?payment_intent=pi_xxx&redirect_status=succeeded&customerEmail=...&cartID=...&cartSecret=...
const paymentIntentId = route.query.payment_intent as string | undefined
const redirectStatus = route.query.redirect_status as string | undefined
// Email/cart passed via URL because Pinia store is wiped on Stripe's full-page redirect
const guestEmail = route.query.customerEmail as string | undefined
const guestCartId = route.query.cartID as string | undefined
const guestCartSecret = route.query.cartSecret as string | undefined

const confirming = ref(true)
const orderId = ref<string | number | null>(null)
const confirmError = ref<string | null>(null)

onMounted(async () => {
  // Stripe sets redirect_status=succeeded when payment is complete
  if (redirectStatus === 'succeeded' && paymentIntentId) {
    await confirmOrder(paymentIntentId)
  } else if (redirectStatus && redirectStatus !== 'succeeded') {
    confirmError.value = t('Payment failed, please try again.')
    confirming.value = false
  } else {
    // Arrived without Stripe params (e.g. direct navigation in dev)
    confirming.value = false
  }

  // Always clear cart and checkout state on this page
  await cartStore.clear()
  checkoutStore.clear()
})

async function confirmOrder(intentId: string) {
  try {
    const response = await $payloadFetch<{
      orderID: number | string
      transactionID: number | string
      message: string
    }>('/api/payments/stripe/confirm-order', {
      method: 'POST',
      body: {
        paymentIntentID: intentId,
        // Required for guest checkout — all values passed via URL since store is cleared on redirect
        ...(guestEmail ? { customerEmail: guestEmail } : {}),
        ...(guestCartId ? { cartID: guestCartId } : {}),
        ...(guestCartSecret ? { secret: guestCartSecret } : {})
      }
    })

    orderId.value = response.orderID
  } catch (err: any) {
    const msg = err.data?.message || err.message || 'Failed to confirm order'
    confirmError.value = msg
    console.error('confirmOrder failed:', msg)
  } finally {
    confirming.value = false
  }
}
</script>

<template>
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="max-w-md mx-auto text-center">

      <!-- Confirming spinner -->
      <template v-if="confirming">
        <div class="flex justify-center mb-6">
          <UIcon name="i-bi-arrow-repeat" class="w-12 h-12 animate-spin text-primary-500" />
        </div>
        <p class="text-gray-500">{{ t('Processing payment...') }}</p>
      </template>

      <!-- Error state -->
      <template v-else-if="confirmError">
        <div class="flex justify-center mb-6">
          <div class="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
            <UIcon name="i-bi-x" class="w-10 h-10 text-red-600 dark:text-red-400" />
          </div>
        </div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('Payment error') }}
        </h1>
        <p class="text-red-500 mb-8">{{ confirmError }}</p>
        <UButton :to="localePath('/checkout')" color="primary" block size="lg">
          {{ t('Try again') }}
        </UButton>
      </template>

      <!-- Success state -->
      <template v-else>
        <div class="flex justify-center mb-6">
          <div class="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
            <UIcon name="i-bi-check" class="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
        </div>

        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('Payment successful!') }}
        </h1>

        <p class="text-gray-500 dark:text-gray-400 mb-2">
          {{ t('Thank you for your order!') }}
        </p>

        <p v-if="orderId" class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-8">
          {{ t('Your order #') }}{{ orderId }}
        </p>
        <p v-else class="text-sm text-gray-500 mb-8">
          {{ t('You will receive a confirmation email shortly.') }}
        </p>

        <div class="flex flex-col gap-3">
          <UButton :to="localePath('/cabinet')" color="primary" block size="lg">
            {{ t('View my orders') }}
          </UButton>
          <UButton :to="localePath('/')" color="neutral" variant="outline" block size="lg">
            {{ t('Return to shop') }}
          </UButton>
        </div>
      </template>

    </div>
  </div>
</template>
