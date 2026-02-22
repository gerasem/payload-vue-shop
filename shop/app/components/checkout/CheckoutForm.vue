<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const { t } = useI18n()

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

defineProps<{ loading?: boolean }>()

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

    <UForm id="checkout-form" :schema="schema" :state="form" class="space-y-5" @submit="onSubmit">

      <!-- First Name / Last Name -->
      <div class="grid grid-cols-2 gap-4">
        <UFormField :label="t('First Name')" name="firstName" required>
          <UInput v-model="form.firstName" class="w-full" size="lg" :placeholder="t('First Name')" />
        </UFormField>
        <UFormField :label="t('Last Name')" name="lastName" required>
          <UInput v-model="form.lastName" class="w-full" size="lg" :placeholder="t('Last Name')" />
        </UFormField>
      </div>

      <!-- Email / Phone -->
      <div class="grid grid-cols-2 gap-4">
        <UFormField :label="t('Email')" name="email" required>
          <UInput v-model="form.email" type="email" class="w-full" size="lg" :placeholder="t('Email')" />
        </UFormField>
        <UFormField :label="t('Phone')" name="phone">
          <UInput v-model="form.phone" type="tel" class="w-full" size="lg" :placeholder="t('Phone')" />
        </UFormField>
      </div>

      <!-- Address (2/3) + Country (1/3) -->
      <div class="grid grid-cols-3 gap-4">
        <UFormField :label="t('Address')" name="address" required class="col-span-2">
          <UInput v-model="form.address" class="w-full" size="lg" :placeholder="t('Address')" />
        </UFormField>
        <UFormField :label="t('Country')" name="country" required class="col-span-1">
          <USelectMenu
            v-model="form.country"
            class="w-full"
            size="lg"
            value-key="value"
            :items="[
              { label: 'Deutschland', value: 'DE' },
              { label: 'Österreich', value: 'AT' },
              { label: 'Schweiz', value: 'CH' }
            ]"
          />
        </UFormField>
      </div>

      <!-- Postal Code / City -->
      <div class="grid grid-cols-2 gap-4">
        <UFormField :label="t('Postal Code')" name="postalCode" required>
          <UInput v-model="form.postalCode" class="w-full" size="lg" :placeholder="t('Postal Code')" />
        </UFormField>
        <UFormField :label="t('City')" name="city" required>
          <UInput v-model="form.city" class="w-full" size="lg" :placeholder="t('City')" />
        </UFormField>
      </div>

    </UForm>
  </UCard>
</template>
