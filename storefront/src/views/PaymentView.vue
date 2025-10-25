<script setup lang="ts">
import CartTotalPrices from '@/components/cart/CartTotalPrices.vue'
import CartItemSummary from '@/components/cart/CartItemSummary.vue'
import { paymentProviderMap } from '@/utils/paymentUtils'
import CartSteps from '@/components/cart/CartSteps.vue'
import { localePath } from '@/composables/localePath'
import { useLoaderStore } from '@/stores/LoaderStore'
import Header from '@/components/content/Header.vue'
import { useCartStore } from '@/stores/CartStore'
import { useSeoMeta } from '@unhead/vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const loaderStore = useLoaderStore()
const router = useRouter()
const cartStore = useCartStore()

const { t } = useI18n()

useSeoMeta({
  title: 'Payment',
})

onMounted(() => {
  if (cartStore.cart?.items?.length === 0) {
    router.push({ name: 'cart' })
  }
})
</script>

<template>
  <main class="container is-fluid">
    <CartSteps />

    <div class="columns">
      <div class="column is-two-thirds-tablet is-three-quarters-desktop">
        <Header :level="1">{{ t('Payment') }}</Header>

        <div v-if="cartStore.cart">
          <div class="columns mt-6">
            <div
              v-if="cartStore.cart.shipping_address"
              class="column"
            >
              <Header :level="3"
                >{{ t('Shipping Address') }}

                <template #action>
                  <RouterLink
                    class="action-link mr-6"
                    :to="localePath('checkout')"
                  >
                    {{ t('Edit') }}
                  </RouterLink>
                </template>
              </Header>

              <p>
                {{ cartStore.cart.shipping_address.first_name }}
                {{ cartStore.cart.shipping_address.last_name }}
              </p>
              <p>{{ cartStore.cart.shipping_address.address_1 }}</p>
              <p>
                {{ cartStore.cart.shipping_address.postal_code }}
                {{ cartStore.cart.shipping_address.city }}
              </p>
              <p>
                {{ cartStore.cart.shipping_address.phone }}
                {{ cartStore.cart.shipping_address.country_code }}
              </p>

              <p>{{ cartStore.cart.email }}</p>
            </div>

            <div
              v-if="cartStore.cart.billing_address"
              class="column"
            >
              <Header :level="3"
                >{{ t('Billing Address') }}
                <template #action>
                  <RouterLink
                    class="action-link mr-6"
                    :to="localePath('checkout')"
                  >
                    {{ t('Edit') }}
                  </RouterLink>
                </template>
              </Header>

              <p v-if="cartStore.cart.billing_address.first_name === ''">
                Billing and delivery address are the same.
              </p>

              <template v-else>
                <p>
                  {{ cartStore.cart.billing_address.first_name }}
                  {{ cartStore.cart.billing_address.last_name }}
                </p>
                <p>{{ cartStore.cart.billing_address.address_1 }}</p>
                <p>
                  {{ cartStore.cart.billing_address.postal_code }}
                  {{ cartStore.cart.billing_address.city }}
                </p>
                <p>
                  {{ cartStore.cart.billing_address.phone }}
                  {{ cartStore.cart.billing_address.country_code }}
                </p>

                <p>{{ cartStore.cart.email }}</p>
              </template>
            </div>
          </div>

          <div class="columns mt-6">
            <div
              v-if="cartStore.cart.shipping_methods"
              class="column"
            >
              <Header :level="3"
                >{{ t('Shipping Method') }}
                <template #action>
                  <RouterLink
                    class="action-link mr-6"
                    :to="localePath('checkout')"
                  >
                    {{ t('Edit') }}
                  </RouterLink>
                </template>
              </Header>
              <p>{{ cartStore.cart.shipping_methods[0].name }}</p>
            </div>

            <div
              v-if="cartStore.cart.payment_collection?.payment_sessions"
              class="column"
            >
              <Header :level="3"
                >{{ t('Payment Method') }}
                <template #action>
                  <RouterLink
                    class="action-link mr-6"
                    :to="localePath('checkout')"
                  >
                    {{ t('Edit') }}
                  </RouterLink>
                </template>
              </Header>
              <p>
                {{
                  t(
                    paymentProviderMap[
                      cartStore.cart.payment_collection.payment_sessions[0].provider_id
                    ],
                  )
                }}
              </p>
            </div>
          </div>

          <Header
            class="mt-6"
            :level="3"
            >{{ t('Your Items') }}</Header
          >

          <CartItemSummary
            v-for="item in cartStore.cart.items"
            :key="item.id"
            :item="item"
          />
        </div>
      </div>

      <div class="column is-one-third-tablet is-one-quarter-desktop">
        <CartTotalPrices :button="{ name: 'Pay', icon: 'bag' }" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.action-link {
  color: $color-primary;
}
</style>
