<script setup lang="ts">
const props = defineProps<{
  variantTypes:
    | Array<{
        id: number
        label: string
        name: string
        options?: {
          docs: Array<{
            id: number
            label: string
            value: string
          }>
        }
      }>
    | null
    | undefined
  modelValue: Record<string, string>
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: Record<string, string>): void
}>()

function selectOption(typeName: string, value: string) {
  emit('update:modelValue', {
    ...props.modelValue,
    [typeName]: value
  })
}
</script>

<template>
  <div v-if="variantTypes && variantTypes.length > 0" class="space-y-4">
    <div v-for="type in variantTypes" :key="type.id">
      <label class="mb-2 block text-sm font-medium text-gray-700">
        {{ type.label }}
      </label>

      <div class="flex flex-wrap gap-2">
        <UButton
          v-for="opt in type.options?.docs"
          :key="opt.id"
          @click="selectOption(type.name, opt.value)"
          :variant="modelValue[type.name] === opt.value ? 'solid' : 'outline'"
          :color="modelValue[type.name] === opt.value ? 'primary' : 'gray'"
          size="md"
        >
          {{ opt.label }}
        </UButton>
      </div>
    </div>
  </div>
</template>
