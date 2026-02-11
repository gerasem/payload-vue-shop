<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

definePageMeta({
  layout: 'default'
})

const { t } = useI18n()

usePageSeo({
  title: t('Log in to your account'),
  description: t('Access your account dashboard to manage your orders and profile.')
})

const schema = z.object({
  email: z.string().email(t('Invalid email')),
  password: z.string().min(6, t('Password is too short'))
})

type Schema = z.output<typeof schema>

const state = reactive({
  email: '',
  password: '',
  remember: false
})

const loading = ref(false)

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  loading.value = true
  // TODO: Implement login logic
  console.log('Login attempt', event.data)
  await new Promise(resolve => setTimeout(resolve, 1000))
  loading.value = false
}
</script>

<template>
  <div class="flex min-h-[50vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <UCard class="w-full max-w-md">
      <template #header>
        <div class="text-center">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            {{ t('Sign in to your account') }}
          </h1>
        </div>
      </template>

      <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
        <UFormField :label="t('Email')" name="email" required>
          <UInput v-model="state.email" type="email" placeholder="name@company.com" autocomplete="email" />
        </UFormField>

        <UFormField :label="t('Password')" name="password" required>
          <UInput v-model="state.password" type="password" placeholder="••••••••" autocomplete="current-password" />
        </UFormField>

        <div class="flex items-center justify-between">
          <UCheckbox v-model="state.remember" :label="t('Remember me')" />
          <UButton variant="link" :padded="false" color="primary" to="/auth/forgot-password">
            {{ t('Forgot password?') }}
          </UButton>
        </div>

        <UButton type="submit" block color="primary" size="lg" :loading="loading">
          {{ t('Sign in') }}
        </UButton>

        <p class="text-sm font-light text-center text-gray-500 dark:text-gray-400">
          {{ t('Don’t have an account yet?') }} 
          <UButton variant="link" :padded="false" color="primary" to="/auth/register">
            {{ t('Sign up') }}
          </UButton>
        </p>
      </UForm>
    </UCard>
  </div>
</template>
