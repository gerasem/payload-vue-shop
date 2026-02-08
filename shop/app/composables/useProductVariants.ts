import type { IItem, IProductFull } from '@/types'
import { getMinPriceFormatted, areAllPricesEqual, formatEuro } from '@/utils/price'

export function useProductVariants(product: Ref<IItem | IProductFull | null | undefined>) {
  const { t } = useI18n()
  
  // Selected options state
  const selectedOptions = ref<Record<string, string>>({})

  // Reset options when product changes
  watch(
    () => product.value?.id,
    () => {
      selectedOptions.value = {}
    }
  )

  // Find selected variant based on options
  const selectedVariant = computed(() => {
    if (!product.value?.enableVariants || !product.value?.variants?.docs) {
      return null
    }

    const selectedCount = Object.keys(selectedOptions.value).length
    if (selectedCount === 0) return null

    return product.value.variants.docs.find(variant => {
      if (!variant?.options || variant.options.length === 0) return false

      let matches = true
      for (const [, selectedValue] of Object.entries(selectedOptions.value)) {
        const hasMatchingOption = variant.options.some((opt: any) => opt.value === selectedValue)
        if (!hasMatchingOption) {
          matches = false
          break
        }
      }
      return matches && variant.options.length === selectedCount
    })
  })

  // Display price logic
  const displayPrice = computed(() => {
    if (selectedVariant.value) {
      return formatEuro(selectedVariant.value.priceInEUR)
    }

    if (areAllPricesEqual(product.value)) {
      return formatEuro(product.value?.priceInEUR)
    }

    return `${t('priceFrom')} ${getMinPriceFormatted(product.value)}`
  })

  return {
    selectedOptions,
    selectedVariant,
    displayPrice
  }
}
