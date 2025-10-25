<script setup lang="ts">
import CartTotalPrices from '@/components/cart/CartTotalPrices.vue'
import Text2Columns from '@/components/content/Text2Columns.vue'
import CartSteps from '@/components/cart/CartSteps.vue'
import CartItem from '@/components/cart/CartItem.vue'
import { useLoaderStore } from '@/stores/LoaderStore'
import Header from '@/components/content/Header.vue'
import { useCartStore } from '@/stores/CartStore'
import { useSeoMeta } from '@unhead/vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const router = useRouter()
const cartStore = useCartStore()
const loaderStore = useLoaderStore()

const { t } = useI18n()

const items = computed(() => {
  const itemsInCart = cartStore.cart?.items
  return itemsInCart?.sort((a, b) => {
    return new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime()
  })
})

const handleSubmit = () => {
  router.push({ name: 'checkout' })
}

useSeoMeta({
  title: 'Shopping Cart',
})
</script>

<template>
  <main class="container is-fluid">
    <CartSteps />

    <form @submit.prevent="handleSubmit()">
      <div class="columns">
        <div class="column is-two-thirds-tablet is-three-quarters-desktop">
          <Header :level="1">Shopping Cart</Header>

          <template v-if="loaderStore.isLoadingKey(loaderStore.LOADER_KEYS.INITIALIZE_CART)">
            <article
              class="media"
              v-for="skeleton in 3"
              :key="skeleton"
            >
              <figure class="media-left">
                <p class="image is-128x128 is-skeleton">
                  <img alt="Placeholder image" />
                </p>
              </figure>
              <div class="media-content">
                <div class="skeleton-block mt-5"></div>
              </div>
            </article>
          </template>

          <p
            v-else-if="items?.length === 0"
            class="my-6 has-text-centered"
          >
            Your cart is empty.
          </p>

          <CartItem
            v-else
            v-for="item in items"
            :key="item.id"
            :item="item"
          />
        </div>

        <div class="column is-one-third-tablet is-one-quarter-desktop">
          <CartTotalPrices
            :button="{ name: 'Weiter', icon: 'bag' }"
            :disabled="items?.length === 0"
          />
        </div>
      </div>
    </form>
  </main>

  <section class="section">
    <div class="container is-fullhd">
      <Text2Columns header="How to buy?">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores expedita, maiores! Ab cum
        porro voluptates voluptatibus voluptatum. Adipisci architecto at, atque cumque deleniti
        eveniet exercitationem expedita, id illum iure, iusto maiores molestias nisi nobis non rerum
        suscipit tempora unde velit veniam veritatis voluptas voluptate. Adipisci delectus
        distinctio dolores iure maiores, nobis praesentium similique suscipit ullam voluptatum?
        Aliquid animi consectetur consequuntur earum est et labore minima nam odio quidem quis
        temporibus, ut vero. Ad alias amet asperiores assumenda consequatur culpa dignissimos,
        doloribus eos fugit, molestiae nam nemo non officiis quasi quidem repellendus repudiandae
        sapiente, ullam vero voluptatibus. Dolore neque quia ratione!
      </Text2Columns>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
