<script setup lang="ts">
defineProps<{
  modelValue: string
  name: string
  items: { name: string; value: string }[]
  required?: boolean
  label?: string
}>()

defineEmits<{
  (e: 'change'): void
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="field">
    <label
      v-if="label"
      class="label"
      >{{ label }}</label
    >
    <div class="control">
      <div class="radio-group">
        <label
          v-for="(item, index) in items"
          :key="item.value"
          class="radio"
        >
          <input
            type="radio"
            :name="name"
            :value="item.value"
            :checked="modelValue === item.value"
            :required="required && index === 0"
            @change="$emit('update:modelValue', item.value), $emit('change')"
          />
          {{ item.name }}
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:has(input:invalid) {
    color: var(--invalid-border-color);
    border-color: var(--invalid-border-color);
  }
}

.radio {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
