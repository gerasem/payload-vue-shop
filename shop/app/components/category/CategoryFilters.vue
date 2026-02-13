<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  priceRange: [number, number]
}>()

const emit = defineEmits(['update:modelValue', 'update:priceRange'])

const { t } = useI18n()

// Price range local state (in Euros)
const localPrice = computed({
  get: () => [props.priceRange[0] / 100, props.priceRange[1] / 100],
  set: (value) => emit('update:priceRange', [Math.round(value[0] * 100), Math.round(value[1] * 100)])
})

const sortOptions = computed(() => [
  { label: t('Popularity'), value: 'popularity' },
  { label: t('Price: Low to High'), value: 'priceInEUR' },
  { label: t('Price: High to Low'), value: '-priceInEUR' }
])

// Use a computed property for v-model binding
const selectedSort = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4 mb-8">
    <!-- Left: Price Range -->
    <div class="flex flex-col gap-2 w-full sm:w-1/2 md:w-1/3">
      <span class="text-sm font-medium text-gray-700">{{ t('Price Range (€)') }}</span>
      <div class="flex items-center gap-2">
        <UInput
          v-model="localPrice[0]"
          type="number"
          size="sm"
          class="w-20"
          :min="0"
          :max="localPrice[1]"
          :step="0.01"
        />
        <USlider v-model="localPrice" :min="0" :max="500" :step="1" />
        <UInput
          v-model="localPrice[1]"
          type="number"
          size="sm"
          class="w-20"
          :min="localPrice[0]"
          :step="0.01"
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
