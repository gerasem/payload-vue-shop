<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

definePageMeta({
  layout: 'default'
})

const { t } = useI18n()
const userStore = useUserStore()
const toast = useToast()
const router = useRouter()

usePageSeo({
  title: t('Sign up'),
  description: t('Create an account to manage your orders.')
})

const schema = z
  .object({
    name: z.string().min(1, t('Name is required')),
    email: z.string().email(t('Invalid email')),
    password: z.string().min(6, t('Password is too short')),
    confirmPassword: z.string()
  })
  .refine(data => data.password === data.confirmPassword, {
    message: t('Passwords do not match'),
    path: ['confirmPassword']
  })

type Schema = z.output<typeof schema>

const state = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  try {
    await userStore.register(event.data.email, event.data.password, event.data.name)
    toast.add({
      title: t('Success'),
      description: t('Account created successfully'),
      color: 'success'
    })
    router.push('/cabinet')
  } catch (e: any) {
    toast.add({
      title: t('Error'),
      description: e.data?.message || e.message || t('Registration failed'),
      color: 'error'
    })
  }
}
</script>

<template>
  <div class="flex min-h-[50vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <UCard class="w-full max-w-md">
      <template #header>
        <div class="text-center">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            {{ t('Create an account') }}
          </h1>
        </div>
      </template>

      <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
        <UFormField :label="t('Name')" name="name" required>
          <UInput
            v-model="state.name"
            type="text"
            placeholder="Max Mustermann"
            autocomplete="name"
          />
        </UFormField>

        <UFormField :label="t('Email')" name="email" required>
          <UInput
            v-model="state.email"
            type="email"
            placeholder="name@company.com"
            autocomplete="email"
          />
        </UFormField>

        <UFormField :label="t('Password')" name="password" required>
          <UInput
            v-model="state.password"
            type="password"
            placeholder="••••••••"
            autocomplete="new-password"
          />
        </UFormField>

        <UFormField :label="t('Confirm Password')" name="confirmPassword" required>
          <UInput
            v-model="state.confirmPassword"
            type="password"
            placeholder="••••••••"
            autocomplete="new-password"
          />
        </UFormField>

        <UButton type="submit" block color="primary" size="lg" :loading="userStore.loading">
          {{ t('Sign up') }}
        </UButton>

        <p class="text-sm font-light text-center text-gray-500 dark:text-gray-400">
          {{ t('Already have an account?') }}
          <UButton variant="link" :padded="false" color="primary" to="/cabinet">
            {{ t('Sign in') }}
          </UButton>
        </p>
      </UForm>
    </UCard>
  </div>
</template>
