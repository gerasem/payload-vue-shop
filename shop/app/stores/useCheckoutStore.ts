import { defineStore } from 'pinia'

export interface CheckoutFormData {
  firstName: string
  lastName: string
  email: string
  address: string
  postalCode: string
  city: string
  country: string
  phone?: string
}

export const useCheckoutStore = defineStore('checkout', () => {
  const clientSecret = ref<string | null>(null)
  const paymentIntentId = ref<string | null>(null)
  const customerEmail = ref<string | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const cartStore = useCartStore()

  /**
   * Calls the Payload ecommerce `initiatePayment` endpoint:
   * POST /api/payments/stripe/initiate
   *
   * The plugin reads the cart from the user's session automatically (server-side cart).
   * It returns { clientSecret, paymentIntentID } from Stripe.
   */
  async function createOrder(formData: CheckoutFormData) {
    // Idempotency: don't create a new payment intent if we already have one
    if (clientSecret.value) {
      return { success: true, clientSecret: clientSecret.value }
    }

    loading.value = true
    error.value = null
    customerEmail.value = formData.email // Persist for confirm-order step

    try {
      const shippingAddress = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        address: formData.address,
        postalCode: formData.postalCode,
        city: formData.city,
        country: formData.country,
        phone: formData.phone
      }

      // The plugin endpoint uses:
      // - cartID from request body OR from the authenticated user's linked cart
      // - shippingAddress passed in body
      // - customerEmail required for guest checkout (no session), also helpful for logged-in users
      const body: Record<string, any> = {
        customerEmail: formData.email, // required for guests; also used by Stripe customer lookup
        shippingAddress
      }

      // Always pass the server cart ID — the plugin requires it when the user's
      // profile doesn't have the cart relationship populated in user.cart.docs
      if (cartStore.serverCartId) {
        body.cartID = cartStore.serverCartId
      }

      // Pass the guest cart secret for access control (only set for unauthenticated carts)
      if (cartStore.cartSecret) {
        body.secret = cartStore.cartSecret
      }

      const response = await $payloadFetch<{
        clientSecret: string
        paymentIntentID: string
        message: string
      }>('/api/payments/stripe/initiate', {
        method: 'POST',
        body
      })

      clientSecret.value = response.clientSecret || null
      paymentIntentId.value = response.paymentIntentID || null

      return {
        success: true,
        clientSecret: response.clientSecret || null
      }
    } catch (err: any) {
      const message =
        err.data?.message || err.message || 'Failed to initiate payment'
      error.value = message
      return { success: false, error: message }
    } finally {
      loading.value = false
    }
  }

  function clear() {
    clientSecret.value = null
    paymentIntentId.value = null
    customerEmail.value = null
    error.value = null
    loading.value = false
  }

  return {
    clientSecret,
    paymentIntentId,
    customerEmail,
    loading,
    error,
    createOrder,
    clear
  }
})
