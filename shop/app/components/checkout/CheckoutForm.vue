<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const { t } = useI18n()

// Validation schema
const schema = z.object({
  email: z.string().email(t('Invalid email')),
  firstName: z.string().min(2, t('Required')),
  lastName: z.string().min(2, t('Required')),
  address: z.string().min(5, t('Required')),
  postalCode: z.string().min(4, t('Required')),
  city: z.string().min(2, t('Required')),
  country: z.string().min(2, t('Required')),
  phone: z.string().optional()
})

type Schema = z.output<typeof schema>

const form = reactive({
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  postalCode: '',
  city: '',
  country: 'DE',
  phone: ''
})

const emit = defineEmits(['submit'])

const props = defineProps<{
  loading?: boolean
}>()

function onSubmit(event: FormSubmitEvent<Schema>) {
  emit('submit', event.data)
}
</script>

<template>
  <UCard>
    <div class="mb-6">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
        {{ t('Contact Information') }}
      </h2>
    </div>

    <UForm :schema="schema" :state="form" class="space-y-4" @submit="onSubmit">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UFormField :label="t('First Name')" name="firstName" required>
          <UInput v-model="form.firstName" icon="i-heroicons-user" />
        </UFormField>

        <UFormField :label="t('Last Name')" name="lastName" required>
          <UInput v-model="form.lastName" icon="i-heroicons-user" />
        </UFormField>
      </div>

      <UFormField :label="t('Email')" name="email" required>
        <UInput v-model="form.email" type="email" icon="i-heroicons-envelope" />
      </UFormField>

      <UFormField :label="t('Address')" name="address" required>
        <UInput v-model="form.address" icon="i-heroicons-home" />
      </UFormField>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UFormField :label="t('Postal Code')" name="postalCode" required>
          <UInput v-model="form.postalCode" icon="i-heroicons-map-pin" />
        </UFormField>

        <UFormField :label="t('City')" name="city" required>
          <UInput v-model="form.city" icon="i-heroicons-building-office" />
        </UFormField>
      </div>

      <UFormField :label="t('Country')" name="country" required>
        <USelect
          v-model="form.country"
          :options="['DE', 'AT', 'CH']"
          icon="i-heroicons-globe-alt"
        />
      </UFormField>

      <UFormField :label="t('Phone')" name="phone">
        <UInput v-model="form.phone" type="tel" icon="i-heroicons-phone" />
      </UFormField>

      <div class="pt-4">
        <UButton type="submit" block size="lg" color="primary" :loading="props.loading">
          {{ t('Continue to Payment') }}
        </UButton>
      </div>
    </UForm>
  </UCard>
</template>
