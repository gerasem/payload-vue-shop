<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const { t } = useI18n()
const localePath = useLocalePath()
const userStore = useUserStore()

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

      token = await (window as any).grecaptcha.execute(recaptchaSiteKey, { action: 'login_form' })
    } catch (err) {
      console.error('reCAPTCHA execution failed', err)
    }
  }

  try {
    await userStore.login(event.data.email, event.data.password)
  } catch (e) {
    // Error handled in store
  }
}

const orders = ref<any[]>([])
const loadingOrders = ref(false)

async function fetchOrders() {
  if (!userStore.loggedIn) return

  loadingOrders.value = true
  try {
    const { orders: fetchedOrders } = await usePayloadOrders()
    orders.value = fetchedOrders
  } catch (e) {
    console.error('Failed to fetch orders', e)
  } finally {
    loadingOrders.value = false
  }
}

// Fetch on mount if logged in, or watch for login
onMounted(() => {
  if (userStore.loggedIn) {
    fetchOrders()
  }
})

watch(
  () => userStore.loggedIn,
  loggedIn => {
    if (loggedIn) {
      fetchOrders()
    } else {
      orders.value = []
    }
  }
)

function formatPrice(amount: number | null | undefined) {
  if (amount == null) return '€0.00'
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount / 100)
}

function getOrderStatusColor(status: string | null | undefined) {
  switch (status) {
    case 'completed':
      return 'primary'
    case 'processing':
      return 'info'
    case 'cancelled':
      return 'error'
    case 'refunded':
      return 'warning'
    default:
      return 'neutral'
  }
}
</script>

<template>
  <BaseContainer>
    <!-- Dashboard (Logged In) -->
    <div v-if="userStore.loggedIn" class="w-full">
      <BaseHeader>
        {{ t('My Account') }}
      </BaseHeader>

      <div class="grid gap-8 lg:gap-12 md:grid-cols-12">
        <!-- Profile Card -->
        <div class="md:col-span-5 lg:col-span-4 h-max shadow-[0_0_40px_10px_rgba(0,0,0,0.05)] bg-white p-6 md:p-8">
          <div class="mb-6">
            <h3 class="font-semibold text-lg">{{ t('Profile') }}</h3>
          </div>

          <div class="space-y-4">
            <p class="text-sm text-gray-500">{{ t('Email') }}</p>
            <p class="font-medium">{{ userStore.user?.email }}</p>

            <p class="text-sm text-gray-500">{{ t('Name') }}</p>
            <p class="font-medium">{{ userStore.user?.name }}</p>

            <div class="pt-4">
              <UButton
                block
                color="neutral"
                variant="outline"
                :loading="userStore.loading"
                @click="userStore.logout"
              >
                {{ t('Sign out') }}
              </UButton>
            </div>
          </div>
        </div>

        <!-- Orders Card -->
        <div class="md:col-span-7 lg:col-span-8">
          <div class="mb-6">
            <h3 class="font-semibold text-lg">{{ t('Order History') }}</h3>
          </div>

          <div v-if="loadingOrders" class="flex justify-center py-8">
            <UIcon name="i-bi-arrow-repeat" class="animate-spin text-2xl text-gray-400" />
          </div>

          <div v-else-if="orders.length > 0" class="divide-y divide-gray-200">
            <div
              v-for="order in orders"
              :key="order.id"
              class="py-6 flex flex-col gap-6"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="font-medium text-lg">{{ t('Order #') }}{{ order.id }}</p>
                  <p class="text-sm text-gray-500">
                    {{
                      new Date(order.createdAt).toLocaleDateString('de-DE', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                      })
                    }}
                  </p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-lg">{{ formatPrice(order.amount) }}</p>
                  <UBadge :color="getOrderStatusColor(order.status)" variant="subtle">{{
                    t(order.status || 'pending')
                  }}</UBadge>
                </div>
              </div>

              <!-- Order composition -->
              <div v-if="order.items && order.items.length > 0" class="mt-4 border border-gray-100 rounded-lg overflow-hidden">
                <table class="w-full text-sm text-left">
                  <thead class="text-xs text-gray-500 bg-gray-50">
                    <tr>
                      <th class="px-4 py-2 font-medium">{{ t('Product') }}</th>
                      <th class="px-4 py-2 font-medium text-right hidden sm:table-cell">{{ t('Price') }}</th>
                      <th class="px-4 py-2 font-medium text-center">{{ t('Qty') }}</th>
                      <th class="px-4 py-2 font-medium text-right">{{ t('Total') }}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    <tr v-for="(item, idx) in order.items" :key="idx">
                      <td class="px-4 py-3">
                        <NuxtLink 
                          v-if="item.product?.slug" 
                          :to="localePath(`/item/${item.product.slug}`)" 
                          class="font-medium hover:text-primary transition-colors block"
                        >
                          {{ item.product?.title || 'Unknown Product' }}
                        </NuxtLink>
                        <span v-else class="font-medium text-gray-900">{{ item.product?.title || 'Unknown Product' }}</span>
                      </td>
                      <td class="px-4 py-3 text-right text-gray-500 hidden sm:table-cell">
                        {{ formatPrice(item.product?.priceInEUR) }}
                      </td>
                      <td class="px-4 py-3 text-center text-gray-500">
                        {{ item.quantity }}
                      </td>
                      <td class="px-4 py-3 text-right font-medium text-gray-900">
                        {{ formatPrice((item.product?.priceInEUR || 0) * item.quantity) }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div v-else class="text-center py-8 text-gray-500">
            {{ t('No orders found.') }}
          </div>
        </div>
      </div>
    </div>

    <div v-else class="w-full max-w-2xl mx-auto shadow-[0_0_40px_10px_rgba(0,0,0,0.05)] p-8 mt-4 bg-white">
      <div class="mb-6">
        <div class="text-center">
          <h1 class="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            {{ t('Sign in to your account') }}
          </h1>
        </div>
      </div>

      <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit" @focusin.once="shouldLoadRecaptcha = true">
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
            autocomplete="current-password"
            size="xl"
            class="w-full"
          />
        </UFormField>

        <div class="flex items-center justify-between">
          <UCheckbox v-model="state.remember" :label="t('Remember me')" />
          <UButton
            variant="link"
            :padded="false"
            color="primary"
            :to="localePath('/auth/forgot-password')"
          >
            {{ t('Forgot password?') }}
          </UButton>
        </div>

        <div class="w-full">
          <UButton type="submit" block color="primary" size="xl" :loading="userStore.loading" class="px-8 !py-3">
            {{ t('Sign in') }}
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
          {{ t("Don't have an account yet?") }}
          <UButton
            variant="link"
            :padded="false"
            color="primary"
            :to="localePath('/auth/register')"
          >
            {{ t('Sign up') }}
          </UButton>
        </p>
      </UForm>
    </div>
  </BaseContainer>
</template>
