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
const localePath = useLocalePath()

usePageSeo({
  title: computed(() => t('Sign up')),
  description: computed(() => t('Create an account to manage your orders.'))
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

const config = useRuntimeConfig()
const recaptchaSiteKey = config.public.recaptchaSiteKey

const shouldLoadRecaptcha = ref(false)

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

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  if (recaptchaSiteKey) {
    shouldLoadRecaptcha.value = true
  }

  let token = ''
  if (recaptchaSiteKey) {
    try {
      await new Promise<void>((resolve, reject) => {
        const checkGrecaptcha = () => {
          if ((window as any).grecaptcha && (window as any).grecaptcha.execute) {
            resolve()
          } else {
            setTimeout(checkGrecaptcha, 100)
          }
        }
        checkGrecaptcha()
        setTimeout(() => reject(new Error('reCAPTCHA timeout')), 5000)
      })

      token = await (window as any).grecaptcha.execute(recaptchaSiteKey, { action: 'register_form' })
    } catch (err) {
      console.error('reCAPTCHA execution failed', err)
    }
  }

  try {
    await userStore.register(event.data.email, event.data.password, event.data.name)
    toast.add({
      title: t('Success'),
      description: t('Account created successfully')
    })
    router.push(localePath('/cabinet'))
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
    <div class="w-full max-w-2xl mx-auto shadow-[0_0_40px_10px_rgba(0,0,0,0.05)] p-8 mt-4 bg-white">
      <div class="mb-6">
        <div class="text-center">
          <h1 class="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            {{ t('Create an account') }}
          </h1>
        </div>
      </div>

      <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit" @focusin.once="shouldLoadRecaptcha = true">
        <UFormField :label="t('Name')" name="name" required>
          <UInput
            v-model="state.name"
            type="text"
            placeholder="Max Mustermann"
            autocomplete="name"
            size="xl"
            class="w-full"
          />
        </UFormField>

        <UFormField :label="t('Email')" name="email" required>
          <UInput
            v-model="state.email"
            type="email"
            placeholder="name@company.com"
            autocomplete="email"
            size="xl"
            class="w-full"
          />
        </UFormField>

        <UFormField :label="t('Password')" name="password" required>
          <UInput
            v-model="state.password"
            type="password"
            placeholder="••••••••"
            autocomplete="new-password"
            size="xl"
            class="w-full"
          />
        </UFormField>

        <UFormField :label="t('Confirm Password')" name="confirmPassword" required>
          <UInput
            v-model="state.confirmPassword"
            type="password"
            placeholder="••••••••"
            autocomplete="new-password"
            size="xl"
            class="w-full"
          />
        </UFormField>

        <div class="w-full">
          <UButton type="submit" block color="primary" size="xl" :loading="userStore.loading" class="px-8 !py-3 mt-2">
            {{ t('Sign up') }}
          </UButton>

          <!-- DSGVO Privacy Notice -->
          <div v-if="recaptchaSiteKey" class="mt-4 text-[11px] text-gray-500 leading-tight">
            <i18n-t keypath="recaptcha_privacy_notice" tag="p">
              <template #privacy>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline hover:text-primary"
                >
                  {{ t('Privacy Policy') }}
                </a>
              </template>

              <template #terms>
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline hover:text-primary"
                >
                  {{ t('Terms of Service') }}
                </a>
              </template>
            </i18n-t>
          </div>
        </div>

        <p class="text-sm font-light text-center text-gray-500 mt-6">
          {{ t('Already have an account?') }}
          <UButton variant="link" :padded="false" color="primary" :to="localePath('/cabinet')">
            {{ t('Sign in') }}
          </UButton>
        </p>
      </UForm>
    </div>
  </div>
</template>
