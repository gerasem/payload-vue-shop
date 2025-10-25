<script setup lang="ts">
defineProps<{
  required?: boolean
  disabled?: boolean
  placeholder: string
  name: string
}>()

const textarea = defineModel<string | undefined>('textarea', { required: true })

defineEmits<{
  (e: 'blur'): void
}>()
</script>

<template>
  <div class="field">
    <div class="control">
      <textarea
        class="textarea"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        v-model="textarea"
        @blur="$emit('blur')"
        :required="required"
      ></textarea>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.textarea {
  &:invalid {
    border-color: var(--invalid-border-color);
  }

  &:invalid,
  &::placeholder {
    color: var(--invalid-placeholder-color);
  }
}
</style>
