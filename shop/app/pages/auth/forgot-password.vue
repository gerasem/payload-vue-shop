<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

definePageMeta({
  layout: 'default'
})

const { t } = useI18n()
const userStore = useUserStore()
const toast = useToast()

usePageSeo({
  title: t('Forgot Password'),
  description: t('Reset your password.')
})

const schema = z.object({
  email: z.string().email(t('Invalid email'))
})

type Schema = z.output<typeof schema>

const state = reactive({
  email: ''
})

const success = ref(false)

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  try {
    await userStore.forgotPassword(event.data.email)
    success.value = true
    toast.add({
      title: t('Success'),
      description: t('Password reset email sent'),
      color: 'success'
    })
  } catch (e: any) {
    toast.add({
      title: t('Error'),
      description: e.data?.message || e.message || t('Failed to send reset email'),
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
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            {{ t('Forgot Password') }}
          </h1>
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {{ t('Enter your email to reset your password') }}
          </p>
        </div>
      </template>

      <div v-if="success" class="text-center space-y-4">
        <p class="text-green-600 dark:text-green-400">
          {{ t('We have sent a password reset link to your email.') }}
        </p>
        <UButton to="/cabinet" block color="primary" variant="soft">
          {{ t('Back to Login') }}
        </UButton>
      </div>

      <UForm v-else :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
        <UFormField :label="t('Email')" name="email" required>
          <UInput v-model="state.email" type="email" placeholder="name@company.com" autocomplete="email" />
        </UFormField>

        <UButton type="submit" block color="primary" size="lg" :loading="userStore.loading">
          {{ t('Reset Password') }}
        </UButton>

        <p class="text-sm font-light text-center text-gray-500 dark:text-gray-400">
          <UButton variant="link" :padded="false" color="primary" to="/cabinet">
            {{ t('Back to Login') }}
          </UButton>
        </p>
      </UForm>
    </UCard>
  </div>
</template>
