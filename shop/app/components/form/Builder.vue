<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const { t } = useI18n()

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
    // Add global privacy consent field
    if (!('privacyAccepted' in state)) {
      state.privacyAccepted = false
    }
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
          z.number({ message: `${label} must be a number` })
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
        validator = z.literal(true, { message: `${label} is required` })
      }
    } else {
      validator = validator.optional().or(z.literal(''))
    }

    shape[field.name] = validator
  })
  
  // Mandatory Privacy Consent for DSGVO
  shape.privacyAccepted = z.literal(true, {
    message: t('Consent is required')
  })

  return z.object(shape)
})

const config = useRuntimeConfig()
const recaptchaSiteKey = config.public.recaptchaSiteKey

const shouldLoadRecaptcha = ref(false)

// Load reCAPTCHA script ONLY when interaction begins (DSGVO compliance)
const recaptchaScripts = computed(() => {
  if (recaptchaSiteKey && shouldLoadRecaptcha.value) {
    return [
      {
        src: `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`,
        async: true,
        defer: true
      }
    ]
  }
  return []
})

useHead({ 
  script: recaptchaScripts
})

const isSubmitting = ref(false)

async function onSubmit(event: FormSubmitEvent<any>) {
  if (isSubmitting.value) return
  
  // Ensure reCAPTCHA is loaded even if submit was triggered without focus (unlikely)
  if (recaptchaSiteKey) {
    shouldLoadRecaptcha.value = true
  }
  
  isSubmitting.value = true
  
  let token = ''
  
  if (recaptchaSiteKey) {
    try {
      // Wait for grecaptcha to be available
      await new Promise<void>((resolve, reject) => {
        const checkGrecaptcha = () => {
          if ((window as any).grecaptcha && (window as any).grecaptcha.execute) {
            resolve()
          } else {
            setTimeout(checkGrecaptcha, 100)
          }
        }
        checkGrecaptcha()
        // Timeout after 5 seconds
        setTimeout(() => reject(new Error('reCAPTCHA timeout')), 5000)
      })

      token = await (window as any).grecaptcha.execute(recaptchaSiteKey, { action: 'submit_form' })
    } catch (err) {
      console.error('reCAPTCHA execution failed', err)
    }
  }
  
  emit('submit', { 
    ...event.data, 
    recaptchaToken: token 
  })
  
  isSubmitting.value = false
}
</script>

<template>
  <UForm 
    :schema="schema" 
    :state="state" 
    class="flex flex-wrap" 
    @submit="onSubmit"
    @focusin.once="shouldLoadRecaptcha = true"
  >
    <!-- Required fields hint -->
    <div class="w-full px-2 mb-4 text-sm text-gray-500 italic">
      * {{ t('Required fields') }}
    </div>

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
          size="xl"
        />

        <!-- Email Input -->
        <UInput
          v-else-if="field.blockType === 'email'"
          v-model="state[field.name]"
          type="email"
          :placeholder="getLabel(field)"
          class="w-full"
          size="xl"
        />

        <!-- Textarea -->
        <UTextarea
          v-else-if="field.blockType === 'textarea'"
          v-model="state[field.name]"
          :rows="4"
          :placeholder="getLabel(field)"
          class="w-full"
          size="xl"
        />

        <!-- Number -->
        <UInput
          v-else-if="field.blockType === 'number'"
          v-model.number="state[field.name]"
          type="number"
          :placeholder="getLabel(field)"
          class="w-full"
          size="xl"
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
          size="xl"
        />

        <!-- Checkbox -->
        <UCheckbox
          v-else-if="field.blockType === 'checkbox'"
          v-model="state[field.name]"
          :label="getLabel(field)"
          size="xl"
        />
      </UFormField>
    </template>

    <!-- Privacy Consent Checkbox (DSGVO) -->
    <div class="w-full px-2 mb-6">
      <UFormField name="privacyAccepted" :required="true">
        <UCheckbox v-model="state.privacyAccepted">
          <template #label>
            <span class="text-sm">
              <i18n-t keypath="privacy_consent_label">
                <template #privacy>
                  <NuxtLink to="/page/datenschutz" target="_blank" class="underline hover:text-primary transition-colors">
                    {{ t('Privacy Policy') }}
                  </NuxtLink>
                </template>
              </i18n-t>
            </span>
          </template>
        </UCheckbox>
      </UFormField>
    </div>

    <div class="w-full px-2">
      <UButton type="submit" size="xl" :loading="loading" icon="bi-send" class="px-8">
        {{ submitLabel }}
      </UButton>

      <!-- DSGVO Privacy Notice (Mandatory if badge is hidden) -->
      <div v-if="recaptchaSiteKey" class="mt-4 text-[11px] text-gray-500 leading-tight">
        <i18n-t keypath="recaptcha_privacy_notice" tag="p">
          <template #privacy>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="underline hover:text-primary">
              {{ t('Privacy Policy') }}
            </a>
          </template>
          
          <template #terms>
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" class="underline hover:text-primary">
              {{ t('Terms of Service') }}
            </a>
          </template>
        </i18n-t>
      </div>
    </div>
  </UForm>
</template>
