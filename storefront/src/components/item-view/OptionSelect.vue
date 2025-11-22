<script setup lang="ts">
import type { IItem } from '@/interfaces/IItem'
import { computed } from 'vue'

const props = defineProps<{
  item: IItem | null
  modelValue: Record<string, string>
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: Record<string, string>): void
}>()

const variantTypes = computed(() => props.item?.variantTypes || [])

const selectOption = (typeName: string, value: string) => {
  const selectedOptions = { ...props.modelValue }
  emit('update:modelValue', {
    ...selectedOptions,
    [typeName]: value,
  })
}
</script>

<template>
  <div
    v-for="type in variantTypes"
    :key="type.id"
    class="mb-5"
  >
    <p class="label mb-2">{{ type.label }}</p>

    <div class="buttons has-addons">
      <button
        v-for="opt in type.options?.docs"
        :key="opt.id"
        @click="selectOption(type.name, opt.value)"
        :class="{
          'is-primary is-selected': modelValue[type.name] === opt.value,
        }"
        class="button is-small"
      >
        {{ opt.label }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
