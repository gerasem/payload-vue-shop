<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

// Define types for Payload Form Fields
// Based on Payload Form Builder plugin structure
interface FormField {
  blockType: string // 'text', 'email', 'textarea', 'number', 'select', 'checkbox', etc.
  name: string
  label?: string
  blockName?: string // Fallback for label
  required?: boolean
  width?: number
  defaultValue?: any
  options?: { label: string; value: string }[] // For select/radio
}

interface Props {
  fields: FormField[]
  loading?: boolean
  submitLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  submitLabel: 'Submit'
})

const emit = defineEmits<{
  (e: 'submit', data: Record<string, any>): void
}>()

// Reactive form state
const state = reactive<Record<string, any>>({})

// Initialize form state
watch(
  () => props.fields,
  newFields => {
    newFields.forEach(field => {
      if (field.name && !(field.name in state)) {
        state[field.name] = field.defaultValue ?? ''
      }
    })
  },
  { immediate: true }
)

// Helper to get display label
function getLabel(field: FormField): string {
  if (field.label) return field.label
  if (field.blockName) return field.blockName
  // Fallback to name, capitalized
  return field.name.charAt(0).toUpperCase() + field.name.slice(1).replace(/-/g, ' ')
}

// Dynamic Zod Schema Generation
const schema = computed(() => {
  const shape: Record<string, any> = {}

  props.fields.forEach(field => {
    let validator: any
    const label = getLabel(field)

    // Special case for Phone: User requested no validation
    if (field.name === 'phone') {
      validator = z.any()
      if (field.required) {
        validator = z.string().min(1, `${label} is required`) // Or coerce to string if needed
      } else {
        validator = validator.optional()
      }
      shape[field.name] = validator
      return
    }

    switch (field.blockType) {
      case 'email':
        validator = z.string().email(`Invalid ${label}`)
        break
      case 'number':
        // Handle empty string from input as undefined/null for optional numbers
        // z.preprocess converts input before validation
        validator = z.preprocess(
          val => (val === '' ? undefined : Number(val)),
          z.number({ invalid_type_error: `${label} must be a number` })
        )
        break
      case 'checkbox':
        validator = z.boolean()
        break
      default:
        validator = z.string()
    }

    if (field.required) {
      if (field.blockType === 'text' || field.blockType === 'textarea') {
        validator = validator.min(1, `${label} is required`)
      }
      if (field.blockType === 'checkbox') {
        // Checkbox required usually means it must be true
        validator = z.literal(true, { errorMap: () => ({ message: `${label} is required` }) })
      }
    } else {
      validator = validator.optional().or(z.literal(''))
    }

    shape[field.name] = validator
  })

  return z.object(shape)
})

function onSubmit(event: FormSubmitEvent<any>) {
  emit('submit', event.data)
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="flex flex-wrap -mx-2" @submit="onSubmit">
    <template v-for="field in fields" :key="field.name">
      <UFormField
        v-if="field.blockType !== 'message'"
        :label="getLabel(field)"
        :name="field.name"
        :required="field.required"
        class="px-2 mb-6"
        :style="{ width: field.width ? `${field.width}%` : '100%' }"
        :data-slot="'root'"
      >
        <!-- Text Input -->
        <UInput
          v-if="field.blockType === 'text'"
          v-model="state[field.name]"
          :placeholder="getLabel(field)"
          class="w-full"
        />

        <!-- Email Input -->
        <UInput
          v-else-if="field.blockType === 'email'"
          v-model="state[field.name]"
          type="email"
          :placeholder="getLabel(field)"
          class="w-full"
        />

        <!-- Textarea -->
        <UTextarea
          v-else-if="field.blockType === 'textarea'"
          v-model="state[field.name]"
          :rows="4"
          :placeholder="getLabel(field)"
          class="w-full"
        />

        <!-- Number -->
        <UInput
          v-else-if="field.blockType === 'number'"
          v-model.number="state[field.name]"
          type="number"
          :placeholder="getLabel(field)"
          class="w-full"
        />

        <!-- Select -->
        <USelect
          v-else-if="field.blockType === 'select'"
          v-model="state[field.name]"
          :options="field.options"
          option-attribute="label"
          value-attribute="value"
          :placeholder="getLabel(field)"
          class="w-full"
        />

        <!-- Checkbox -->
        <UCheckbox
          v-else-if="field.blockType === 'checkbox'"
          v-model="state[field.name]"
          :label="getLabel(field)"
        />
      </UFormField>
    </template>

    <div class="w-full px-2">
      <UButton type="submit" block size="lg" :loading="loading">
        {{ submitLabel }}
      </UButton>
    </div>
  </UForm>
</template>
