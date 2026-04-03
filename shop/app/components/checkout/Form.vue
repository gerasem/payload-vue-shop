<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const { t } = useI18n()

const schema = z
  .object({
    email: z.string().email(t('Invalid email')),
    firstName: z.string().min(2, t('Required')),
    lastName: z.string().min(2, t('Required')),
    address: z.string().min(5, t('Required')),
    postalCode: z.string().min(4, t('Required')),
    city: z.string().min(2, t('Required')),
    country: z.string().min(2, t('Required')),
    phone: z.string().optional(),
    differentBillingAddress: z.boolean().default(false),
    billingAddress: z
      .object({
        firstName: z.string(),
        lastName: z.string(),
        address: z.string(),
        postalCode: z.string(),
        city: z.string(),
        country: z.string()
      })
      .optional()
  })
  .superRefine((data, ctx) => {
    if (data.differentBillingAddress) {
      const fields = ['firstName', 'lastName', 'address', 'postalCode', 'city', 'country'] as const
      const minLengths = {
        firstName: 2,
        lastName: 2,
        address: 5,
        postalCode: 4,
        city: 2,
        country: 2
      }

      fields.forEach(field => {
        const val = data.billingAddress?.[field] || ''
        if (val.length < minLengths[field]) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: t('Required'),
            path: ['billingAddress', field]
          })
        }
      })
    }
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
  phone: '',
  differentBillingAddress: false,
  billingAddress: {
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: '',
    country: 'DE'
  }
})

const emit = defineEmits(['submit'])

defineProps<{ loading?: boolean }>()

function onSubmit(event: FormSubmitEvent<Schema>) {
  emit('submit', event.data)
}
</script>

<template>
  <UForm id="checkout-form" :schema="schema" :state="form" class="space-y-5" @submit="onSubmit">
    <!-- First Name / Last Name -->
    <div class="grid grid-cols-2 gap-4">
      <UFormField :label="t('First Name')" name="firstName" required>
        <UInput v-model="form.firstName" class="w-full" size="xl" :placeholder="t('First Name')" />
      </UFormField>
      <UFormField :label="t('Last Name')" name="lastName" required>
        <UInput v-model="form.lastName" class="w-full" size="xl" :placeholder="t('Last Name')" />
      </UFormField>
    </div>

    <!-- Email / Phone -->
    <div class="grid grid-cols-2 gap-4">
      <UFormField :label="t('Email')" name="email" required>
        <UInput
          v-model="form.email"
          type="email"
          class="w-full"
          size="xl"
          :placeholder="t('Email')"
        />
      </UFormField>
      <UFormField :label="t('Phone')" name="phone">
        <UInput
          v-model="form.phone"
          type="tel"
          class="w-full"
          size="xl"
          :placeholder="t('Phone')"
        />
      </UFormField>
    </div>

    <!-- Address (2/3) + Country (1/3) -->
    <div class="grid grid-cols-3 gap-4">
      <UFormField :label="t('Address')" name="address" required class="col-span-2">
        <UInput v-model="form.address" class="w-full" size="xl" :placeholder="t('Address')" />
      </UFormField>
      <UFormField :label="t('Country')" name="country" required class="col-span-1">
        <USelectMenu
          v-model="form.country"
          class="w-full"
          size="xl"
          value-key="value"
          :items="[
            { label: t('Germany'), value: 'DE' },
            { label: t('Austria'), value: 'AT' },
            { label: t('Switzerland'), value: 'CH' }
          ]"
        />
      </UFormField>
    </div>

    <!-- Postal Code / City -->
    <div class="grid grid-cols-2 gap-4">
      <UFormField :label="t('Postal Code')" name="postalCode" required>
        <UInput
          v-model="form.postalCode"
          class="w-full"
          size="xl"
          :placeholder="t('Postal Code')"
        />
      </UFormField>
      <UFormField :label="t('City')" name="city" required>
        <UInput v-model="form.city" class="w-full" size="xl" :placeholder="t('City')" />
      </UFormField>
    </div>

    <!-- Billing Address Checkbox -->
    <div class="border-t border-gray-200 dark:border-gray-800 pt-6 mt-6">
      <UFormField name="differentBillingAddress">
        <UCheckbox v-model="form.differentBillingAddress" :label="t('Different billing address')" />
      </UFormField>
    </div>

    <!-- Billing Address Form -->
    <div v-if="form.differentBillingAddress" class="space-y-5 pt-4">
      <h3 class="text-lg font-medium">
        {{ t('Billing Address') }}
      </h3>

      <!-- Billing First Name / Last Name -->
      <div class="grid grid-cols-2 gap-4">
        <UFormField :label="t('First Name')" name="billingAddress.firstName" required>
          <UInput
            v-model="form.billingAddress.firstName"
            class="w-full"
            size="xl"
            :placeholder="t('First Name')"
          />
        </UFormField>
        <UFormField :label="t('Last Name')" name="billingAddress.lastName" required>
          <UInput
            v-model="form.billingAddress.lastName"
            class="w-full"
            size="xl"
            :placeholder="t('Last Name')"
          />
        </UFormField>
      </div>

      <!-- Billing Address (2/3) + Country (1/3) -->
      <div class="grid grid-cols-3 gap-4">
        <UFormField :label="t('Address')" name="billingAddress.address" required class="col-span-2">
          <UInput
            v-model="form.billingAddress.address"
            class="w-full"
            size="xl"
            :placeholder="t('Address')"
          />
        </UFormField>
        <UFormField :label="t('Country')" name="billingAddress.country" required class="col-span-1">
          <USelectMenu
            v-model="form.billingAddress.country"
            class="w-full"
            size="xl"
            value-key="value"
            :items="[
              { label: t('Germany'), value: 'DE' },
              { label: t('Austria'), value: 'AT' },
              { label: t('Switzerland'), value: 'CH' }
            ]"
          />
        </UFormField>
      </div>

      <!-- Billing Postal Code / City -->
      <div class="grid grid-cols-2 gap-4">
        <UFormField :label="t('Postal Code')" name="billingAddress.postalCode" required>
          <UInput
            v-model="form.billingAddress.postalCode"
            class="w-full"
            size="xl"
            :placeholder="t('Postal Code')"
          />
        </UFormField>
        <UFormField :label="t('City')" name="billingAddress.city" required>
          <UInput
            v-model="form.billingAddress.city"
            class="w-full"
            size="xl"
            :placeholder="t('City')"
          />
        </UFormField>
      </div>
    </div>
  </UForm>
</template>
