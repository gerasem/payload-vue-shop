<script setup lang="ts">
import { loadStripe } from '@stripe/stripe-js'

definePageMeta({
  layout: 'default',
  ssr: false
})

const { t } = useI18n()
const localePath = useLocalePath()
const router = useRouter()
const config = useRuntimeConfig()
const checkoutStore = useCheckoutStore()
const cartStore = useCartStore()

usePageSeo({
  title: computed(() => t('Payment')),
  description: computed(() => t('Complete your payment securely.'))
})

// Guard: if no clientSecret, user landed here without completing checkout
onMounted(async () => {
  if (!checkoutStore.clientSecret) {
    await router.replace(localePath('/checkout'))
    return
  }

  await initStripe()
})

// Stripe state
const stripeInstance = ref<any>(null)
const elements = ref<any>(null)
const paymentElement = ref<HTMLElement | null>(null)
const paymentProcessing = ref(false)
const paymentError = ref<string | null>(null)

async function initStripe() {
  const key = config.public.stripeKey
  if (!key) {
    paymentError.value = 'Stripe is not configured.'
    return
  }

  stripeInstance.value = await loadStripe(key)
  if (!stripeInstance.value) {
    paymentError.value = 'Failed to load Stripe.'
    return
  }

  elements.value = stripeInstance.value.elements({
    clientSecret: checkoutStore.clientSecret!,
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#6366f1',
        borderRadius: '8px'
      }
    }
  })

  const paymentEl = elements.value.create('payment')
  await nextTick()
  if (paymentElement.value) {
    paymentEl.mount(paymentElement.value)
  }
}

async function handlePayment() {
  if (!stripeInstance.value || !elements.value) return

  paymentProcessing.value = true
  paymentError.value = null

  const successBase = `${window.location.origin}${localePath('/payment/success')}`
  const params = new URLSearchParams()
  if (checkoutStore.customerEmail) params.set('customerEmail', checkoutStore.customerEmail)
  if (cartStore.serverCartId) params.set('cartID', String(cartStore.serverCartId))
  if (cartStore.cartSecret) params.set('cartSecret', cartStore.cartSecret)
  const returnUrl = `${successBase}?${params.toString()}`

  const { error } = await stripeInstance.value.confirmPayment({
    elements: elements.value,
    confirmParams: {
      return_url: returnUrl
    }
  })

  // If we reach here, confirmPayment didn't redirect — there was an error
  if (error) {
    paymentError.value = error.message || t('Payment failed, please try again.')
  }

  paymentProcessing.value = false
}
</script>

<template>
  <div class="max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid gap-8 lg:grid-cols-3">
      <!-- Left: Stripe Payment Form -->
      <div class="lg:col-span-2">
        <UCard>
          <template #header>
            <div class="flex items-center justify-between">
              <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
                {{ t('Secure Payment') }}
              </h1>
              <!-- Stripe Badge -->
              <div class="flex items-center gap-1 text-xs text-gray-400">
                <UIcon name="i-bi-lock" class="w-3 h-3" />
                <span>Stripe</span>
              </div>
            </div>
          </template>

          <!-- Stripe mounted here -->
          <div v-if="checkoutStore.clientSecret">
            <div ref="paymentElement" class="min-h-[200px]" />
          </div>

          <!-- No clientSecret state (configuring...) -->
          <div v-else class="flex items-center justify-center py-12">
            <UIcon name="i-bi-arrow-repeat" class="animate-spin text-2xl text-gray-400" />
          </div>
        </UCard>
      </div>

      <!-- Right: Order Summary with Pay button -->
      <div class="lg:col-span-1">
        <CartSummary :show-checkout-button="false" :show-continue-shopping="false">
          <template #action>
            <!-- Payment Error -->
            <UAlert
              v-if="paymentError"
              class="mb-3"
              color="error"
              variant="soft"
              :title="t('Payment error')"
              :description="paymentError"
              icon="i-bi-exclamation-circle"
            />

            <UButton
              block
              size="lg"
              color="primary"
              :loading="paymentProcessing"
              :disabled="paymentProcessing || !checkoutStore.clientSecret"
              icon="i-bi-lock"
              @click="handlePayment"
            >
              {{ paymentProcessing ? t('Processing payment...') : t('Pay now') }}
            </UButton>

            <p class="mt-2 text-center text-xs text-gray-400">
              {{ t('Your payment is secured by Stripe.') }}
            </p>
          </template>
        </CartSummary>
      </div>
    </div>
  </div>
</template>
