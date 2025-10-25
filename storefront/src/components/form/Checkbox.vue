<script setup lang="ts">
const modelValue = defineModel<boolean>({ required: true })

defineProps<{
  label: string
  name?: string
  required?: boolean
  disabled?: boolean
}>()

defineEmits<{
  (e: 'change'): void
}>()
</script>

<template>
  <div class="field">
    <div class="control">
      <label
        class="checkbox"
        :class="{ 'is-disabled': disabled }"
      >
        <input
          type="checkbox"
          :name="name"
          v-model="modelValue"
          :required="required"
          @change="$emit('change')"
          :disabled="disabled"
        />
        {{ label }}
      </label>
    </div>
  </div>
</template>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:has(input:invalid) {
    color: var(--invalid-border-color);
  }
}
</style>
