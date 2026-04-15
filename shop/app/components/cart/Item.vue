<script setup lang="ts">
import type { ICartItem } from '@/types'
import { useCartStore } from '@/stores/useCartStore'

const props = defineProps<{
  item: ICartItem
}>()

const { t } = useI18n()
const localePath = useLocalePath()
const cartStore = useCartStore()
const config = useRuntimeConfig()

const quantity = ref(props.item.qty)

const isOutOfStock = computed(() => props.item.inventory === 0)

const isLowStock = computed(
  () =>
    props.item.inventory !== null &&
    props.item.inventory !== undefined &&
    props.item.inventory > 0 &&
    props.item.inventory <= 8
)
const hasUnlimitedStock = computed(
  () => props.item.inventory === null || props.item.inventory === undefined
)

const maxQuantity = computed(() => {
  if (hasUnlimitedStock.value) return 999
  return props.item.inventory || 1
})

function updateQuantity() {
  if (quantity.value < 1) quantity.value = 1
  if (!hasUnlimitedStock.value && quantity.value > maxQuantity.value) {
    quantity.value = maxQuantity.value
  }

  cartStore.updateQuantity(props.item.productId, props.item.variantId, quantity.value)
}

const isPopoverOpen = ref(false)

function removeItem() {
  isPopoverOpen.value = false
  cartStore.remove(props.item.productId, props.item.variantId)
}

const imageUrl = computed(() => {
  if (!props.item.image) return ''
  return `${config.public.payloadUrl}${props.item.image}`
})

const lineTotal = computed(() => props.item.priceInEUR * quantity.value)
</script>

<template>
  <div data-test="cart-item" class="flex items-center gap-6 border-b border-gray-50 py-4 mb-0 last:border-0">
    <NuxtLink :to="localePath(`/item/${item.slug}`)" class="group relative block">
      <div
        class="h-24 w-24 overflow-hidden bg-gray-100 sm:h-28 sm:w-28 group-hover:opacity-75 transition-opacity"
      >
        <img
          v-if="imageUrl"
          :src="imageUrl"
          :alt="item.title"
          class="h-full w-full object-cover object-center"
        />
      </div>
    </NuxtLink>

    <div class="flex-1 min-w-0">
      <h3 class="font-semibold hover:text-primary transition-colors">
        <NuxtLink :to="localePath(`/item/${item.slug}`)" data-test="cart-item-title">
          {{ item.title }}
        </NuxtLink>
      </h3>

      <p v-if="item.variantTitle" class="text-gray-500">
        {{ item.variantTitle }}
      </p>

      <div v-if="isLowStock || isOutOfStock" class="mt-1">
        <span v-if="isOutOfStock" class="text-sm text-primary">
          {{ t('Out of stock') }}
        </span>

        <span v-else class="text-sm text-secondary">
          {{ t('Only {count} left', { count: item.inventory }) }}
        </span>
      </div>
    </div>

    <div class="hidden md:block text-center">
      <BaseAnimatedPrice :value="item.priceInEUR" />
    </div>

    <div class="flex items-center justify-center w-24">
      <CartQuantity
        v-model="quantity"
        :inventory="item.inventory"
        @update:model-value="updateQuantity"
      />
    </div>

    <div class="text-right">
      <template v-if="cartStore.isHydrating && !cartStore.count">
        <USkeleton class="h-5 w-20 ml-auto" />
      </template>

      <template v-else>
        <div class="flex flex-col items-end">
          <BaseAnimatedPrice :value="lineTotal" class="font-bold" />

          <div class="md:hidden flex items-baseline gap-1">
            <BaseAnimatedPrice :value="item.priceInEUR" class="text-[10px] text-gray-400" />
            <span class="text-[10px] text-gray-400">/ St.</span>
          </div>
        </div>
      </template>
    </div>

    <div class="flex-shrink-0">
      <UPopover v-model:open="isPopoverOpen" :popper="{ placement: 'top-end' }">
        <UButton
          icon="i-bi-x-lg"
          color="neutral"
          variant="ghost"
          size="lg"
          class="text-gray-400 hover:text-red-500 transition-colors p-1"
          aria-label="Remove item"
        />

        <template #content>
          <div class="p-4 w-60 text-center bg-white shadow-xl">
            <p class="mb-3">
              {{ t('Remove item?') }}
            </p>
            <div class="flex gap-2 justify-center">
              <UButton variant="outline" color="neutral" @click="isPopoverOpen = false">
                {{ t('Cancel') }}
              </UButton>
              <UButton color="primary" @click="removeItem">
                {{ t('Remove') }}
              </UButton>
            </div>
          </div>
        </template>
      </UPopover>
    </div>
  </div>
</template>
