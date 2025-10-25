<script setup lang="ts">
// import Button from '@/components/form/Button.vue'
// import type { HttpTypes } from '@medusajs/types'
// import { computed } from 'vue'

// const props = defineProps<{
//   option: HttpTypes.StoreProductOption
//   current: string | undefined
//   title: string
//   disabled?: boolean
// }>()

// const emit = defineEmits<{
//   (e: 'update-option', value: string): void
// }>()

// const filteredOptions = computed(() => (props.option.values ?? []).map((v) => v.value))

// const updateOption = (value: string) => {
//   emit('update-option', value)
// }
</script>

<template>
  <div class="field" v-if="false">
    <label class="label is-small">{{ title }}</label>
    <div class="control buttons option-select__buttons are-small">
      <Button
        v-for="value in filteredOptions"
        :key="value"
        @click="updateOption(value)"
        class="button option-select__button"
        :class="[{ 'is-info': value === current }, { 'is-light': value !== current }]"
        :disabled="disabled"
        data-testid="option-button"
      >
        {{ value }}
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.option-select {
  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: space-between;
  }

  &__button {
    flex: 1;
    min-width: 0;
  }
}
</style>
