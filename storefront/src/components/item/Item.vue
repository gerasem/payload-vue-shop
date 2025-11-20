<script setup lang="ts">
import { getMinPriceFormatted, formatEuro, areAllPricesEqual } from '@/utils/priceUtils'
import { localePath } from '@/composables/localePath.ts'
import type { IItem } from '@/interfaces/IItem'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const props = defineProps<{
  item: IItem
}>()

const imageUrl = computed(() => {
  return import.meta.env.VITE_BACKEND_DOMAIN + props.item.gallery?.[0]?.url
})

const price = computed(() => {
  if (areAllPricesEqual(props.item)) {
    return formatEuro(props.item.priceInEUR)
  } else {
    return `${t('From')} ${getMinPriceFormatted(props.item)}`
  }
})
</script>

<template>
  <RouterLink
    :to="localePath(`item/${item.slug}`)"
    class="item"
  >
    <img
      class="image is-square item__image"
      :src="imageUrl"
      :alt="item.title || ''"
    />

    <div class="item__bottom">
      <h3 class="item__title">{{ item.title }}</h3>

      <div class="item__price">
        {{ price }}
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
