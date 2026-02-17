<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string
    priceRange: [number, number]
    min?: number // In cents
    max?: number // In cents
  }>(),
  {
    min: 0,
    max: 50000 // Default 500 EUR
  }
)

const emit = defineEmits(['update:modelValue', 'update:priceRange'])

const { t } = useI18n()

// Helper values in Euros
const minEuro = computed(() => Math.floor(props.min / 100))
const maxEuro = computed(() => Math.ceil(props.max / 100))

// Price range local state (in Euros)
const localPrice = computed({
  get: () => [props.priceRange[0] / 100, props.priceRange[1] / 100],
  set: (value: number[]) => {
    if (
      value &&
      value.length === 2 &&
      typeof value[0] === 'number' &&
      typeof value[1] === 'number'
    ) {
      emit('update:priceRange', [Math.round(value[0] * 100), Math.round(value[1] * 100)])
    }
  }
})

// Helper computed for inputs to ensure reactivity triggers the main computed setter
const minPrice = computed({
  get: () => localPrice.value[0] ?? minEuro.value,
  set: val => {
    const currentMax = localPrice.value[1] ?? maxEuro.value
    localPrice.value = [Number(val), currentMax]
  }
})

const maxPrice = computed({
  get: () => localPrice.value[1] ?? maxEuro.value,
  set: val => {
    const currentMin = localPrice.value[0] ?? minEuro.value
    localPrice.value = [currentMin, Number(val)]
  }
})

const sortOptions = computed(() => [
  { label: t('Popularity'), value: 'popularity' },
  { label: t('Price: Low to High'), value: 'priceInEUR' },
  { label: t('Price: High to Low'), value: '-priceInEUR' }
])

// Use a computed property for v-model binding
const selectedSort = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
})
</script>

<template>
  <div
    class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4 mb-8"
  >
    <!-- Left: Price Range -->
    <div class="flex flex-col gap-2 w-full sm:w-1/2 md:w-1/3">
      <span class="text-sm font-medium text-gray-700">{{ t('Price Range (€)') }}</span>
      <div class="flex items-center gap-2">
        <UInputNumber
          v-model="minPrice"
          size="sm"
          class="w-20"
          :min="minEuro"
          :max="maxPrice"
          :increment="false"
          :decrement="false"
        />
        <USlider v-model="localPrice" :min="minEuro" :max="maxEuro" :step="0.01" />
        <UInputNumber
          v-model="maxPrice"
          size="sm"
          class="w-20"
          :min="minPrice"
          :max="maxEuro"
          :increment="false"
          :decrement="false"
        />
      </div>
    </div>

    <!-- Right: Sort -->
    <div class="flex items-center gap-2">
      <span class="text-sm font-medium text-gray-700">{{ t('Sort by:') }}</span>
      <USelect
        v-model="selectedSort"
        :items="sortOptions"
        option-attribute="label"
        value-attribute="value"
        class="w-full sm:w-48"
      />
    </div>
  </div>
</template>
