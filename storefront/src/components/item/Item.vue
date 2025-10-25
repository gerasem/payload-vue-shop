<script setup lang="ts">
import { useProductPrice } from '@/composables/useProductPrice'
import { localePath } from '@/composables/localePath.ts'
import { HttpTypes } from '@medusajs/types'
import { useI18n } from 'vue-i18n'

const { getProductPrice } = useProductPrice()
const { t } = useI18n()

const props = defineProps<{
  item: HttpTypes.StoreProduct
}>()

const { cheapestPrice } = getProductPrice({
  product: props.item,
})
</script>

<template>
  <RouterLink
    :to="localePath(`item/${item.handle}`)"
    class="item"
  >
    <img
      class="image is-square item__image"
      :src="item.thumbnail ? item.thumbnail : '/images/placeholder.png'"
      :alt="item.title"
    />

    <div class="item__bottom">
      <h3 class="item__title">{{ item.title }}</h3>

      <div
        v-if="cheapestPrice"
        class="item__price"
      >
        {{ t('from') }}
        {{ cheapestPrice.calculated_price }}
      </div>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.item {
  &__image {
    width: 100%;
    object-fit: cover;
    background-color: $background-gray;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-top: 0.75rem;
  }

  &__title {
    color: $color-text;
  }

  &__price {
    color: $color-text;
    font-weight: 700;
  }
}
</style>
