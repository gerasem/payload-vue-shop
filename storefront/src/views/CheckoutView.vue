<script setup lang="ts">
import CartShippingOptions from '@/components/cart/CartShippingOptions.vue'
import CartPaymentOptions from '@/components/cart/CartPaymentOptions.vue'
import CartTotalPrices from '@/components/cart/CartTotalPrices.vue'
import CartAddressFrom from '@/components/cart/CartAddressFrom.vue'
import CartEmailForm from '@/components/cart/CartEmailForm.vue'
import type { IUserAddress } from '@/interfaces/IUserAddress'
import CartSteps from '@/components/cart/CartSteps.vue'
import Checkbox from '@/components/form/Checkbox.vue'
import { onMounted, reactive, ref, watch } from 'vue'
import Header from '@/components/content/Header.vue'
import { useToastStore } from '@/stores/ToastStore'
import { useCartStore } from '@/stores/CartStore'
import { useSeoMeta } from '@unhead/vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const toastStore = useToastStore()
const cartStore = useCartStore()
const router = useRouter()

const { t } = useI18n()

const email = ref<string>(cartStore.cart?.email || '')
const userAddress = reactive<IUserAddress>({
  firstname: cartStore.cart?.shipping_address?.first_name || '',
  lastname: cartStore.cart?.shipping_address?.last_name || '',
  address: cartStore.cart?.shipping_address?.address_1 || '',
  city: cartStore.cart?.shipping_address?.city || '',
  country: cartStore.cart?.shipping_address?.country_code || '',
  zip: cartStore.cart?.shipping_address?.postal_code || '',
  phone: cartStore.cart?.shipping_address?.phone || '',
})

const billingAddress = reactive<IUserAddress>({
  firstname: cartStore.cart?.billing_address?.first_name || '',
  lastname: cartStore.cart?.billing_address?.last_name || '',
  address: cartStore.cart?.billing_address?.address_1 || '',
  city: cartStore.cart?.billing_address?.city || '',
  country: cartStore.cart?.billing_address?.country_code || '',
  zip: cartStore.cart?.billing_address?.postal_code || '',
  phone: cartStore.cart?.billing_address?.phone || '',
})

const selectedShippingId = ref<string>('')

watch(selectedShippingId, (newVal) => {
  console.log('Selected shipping option ID changed:', newVal)
  if (
    cartStore.cart?.shipping_methods &&
    selectedShippingId.value !== cartStore.cart?.shipping_methods[0]?.shipping_option_id
  ) {
    cartStore.selectShippingOption(newVal)
  }
})

const selectedPaymentMethod = ref<string>('')

watch(selectedPaymentMethod, (newVal) => {
  console.log('payments method changed:', newVal)

  cartStore.selectPaymentOption(newVal)
})

const isFormValid = ref<boolean>(true)

useSeoMeta({
  title: 'Checkout',
})

onMounted(() => {
  if (cartStore.cart?.items?.length === 0) {
    router.push({ name: 'cart' })
  }

  if (cartStore.cart?.shipping_methods && cartStore.cart?.shipping_methods[0]?.shipping_option_id) {
    selectedShippingId.value = cartStore.cart?.shipping_methods[0].shipping_option_id
  }

  if (
    cartStore.cart?.payment_collection &&
    cartStore.cart.payment_collection.payment_sessions &&
    cartStore.cart.payment_collection.payment_sessions[0]?.provider_id
  ) {
    selectedPaymentMethod.value = cartStore.cart.payment_collection.payment_sessions[0].provider_id
  }
})

const billingAddressSameAsShippingAddress = ref<boolean>(true)

const formRef = ref<HTMLFormElement | null>(null)

const handleSubmit = async () => {
  const form = formRef.value
  if (form?.checkValidity()) {
    console.log('Form is valid')
    isFormValid.value = true
    const transformUserAddress = {
      first_name: userAddress.firstname,
      last_name: userAddress.lastname,
      address_1: userAddress.address,
      postal_code: userAddress.zip,
      city: userAddress.city,
      country_code: 'de',
      phone: userAddress.phone,
    }

    const transformBillingAddress = {
      first_name: billingAddress.firstname,
      last_name: billingAddress.lastname,
      address_1: billingAddress.address,
      postal_code: billingAddress.zip,
      city: billingAddress.city,
      country_code: 'de',
      phone: billingAddress.phone,
    }

    await cartStore.updateCart({
      updateData: {
        email: email.value,
        shipping_address: transformUserAddress,
        billing_address: billingAddressSameAsShippingAddress.value
          ? transformBillingAddress
          : transformUserAddress,
      },
    })

    router.push({ name: 'payment' })
  } else {
    form?.reportValidity()
    isFormValid.value = false
    toastStore.addError(`Please fill all required fields`)
  }
}

const terms = ref<boolean>(false)

const checkValidation = () => {
  if (!isFormValid.value) {
    const form = formRef.value
    console.log('check form on blur')
    if (form?.checkValidity()) {
      console.log('FORM VALID')

      isFormValid.value = true
    } else {
      form?.reportValidity()
      isFormValid.value = false
    }
  }
}
</script>

<template>
  <main class="container is-fluid">
    <CartSteps />

    <form
      ref="formRef"
      @submit.prevent="handleSubmit()"
      novalidate
      :class="{ 'is-invalid': !isFormValid }"
    >
      <div class="columns">
        <div class="column is-two-thirds-tablet is-three-quarters-desktop">
          <Header :level="1">{{ t('Checkout') }}</Header>

          <div class="columns is-multiline">
            <div class="column is-full-tablet is-two-thirds-desktop">
              <CartEmailForm
                v-model:email="email"
                @blur="checkValidation()"
              />

              <CartAddressFrom
                :header="t('Address')"
                v-model:address="userAddress"
                @blur="checkValidation()"
              />

              <Checkbox
                class="my-3"
                v-model="billingAddressSameAsShippingAddress"
                label="Billing address same as shipping address"
                name="isBillingAddeessSameAsShippingAddress"
              />

              <CartAddressFrom
                v-if="!billingAddressSameAsShippingAddress"
                class="mt-4"
                :header="t('Billing Address')"
                v-model:address="billingAddress"
                @blur="checkValidation()"
              />
            </div>
            <div class="column is-full-tablet is-one-third-desktop pl-5">
              <CartShippingOptions
                v-if="cartStore.cart"
                v-model:shippingId="selectedShippingId"
                @change="checkValidation()"
              />

              <CartPaymentOptions
                v-if="cartStore.cart"
                v-model:paymentMethod="selectedPaymentMethod"
                @change="checkValidation()"
              />
            </div>
          </div>
        </div>

        <div class="column is-one-third-tablet is-one-quarter-desktop">
          <CartTotalPrices
            :button="{
              name: 'Weiter',
              icon: 'bag',
              disabled: !isFormValid,
            }"
          >
            <template #terms>
              <Checkbox
                class="is-flex is-justify-content-center mt-3"
                v-model="terms"
                label="Agree to Terms"
                name="terms"
                @change="checkValidation()"
                required
              />
            </template>
          </CartTotalPrices>
        </div>
      </div>
    </form>
  </main>
</template>

<style lang="scss" scoped>
form {
  --invalid-border-color: inherit;
  --invalid-placeholder-color: rgb(214, 217, 224);

  &.is-invalid {
    --invalid-border-color: #ff3860;
    --invalid-placeholder-color: #ff3860;
  }
}
</style>
