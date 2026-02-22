<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

definePageMeta({
  layout: 'default'
})

const { t } = useI18n()
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

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
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
  <div class="flex min-h-[50vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <!-- Dashboard (Logged In) -->
    <div v-if="userStore.loggedIn" class="w-full max-w-4xl">
      <h1 class="text-2xl font-bold text-gray-900 mb-6 text-center">
        {{ t('My Account') }}
      </h1>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Profile Card -->
        <UCard class="h-full">
          <template #header>
            <h3 class="font-semibold">{{ t('Profile') }}</h3>
          </template>
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
        </UCard>

        <!-- Orders Card -->
        <UCard class="md:col-span-1 lg:col-span-2 h-full">
          <template #header>
            <h3 class="font-semibold">{{ t('Order History') }}</h3>
          </template>

          <div v-if="loadingOrders" class="flex justify-center py-8">
            <UIcon name="i-bi-arrow-repeat" class="animate-spin text-2xl text-gray-400" />
          </div>

          <div v-else-if="orders.length > 0" class="space-y-4">
            <div
              v-for="order in orders"
              :key="order.id"
              class="flex items-center justify-between p-4 border rounded-lg border-gray-200"
            >
              <div>
                <p class="font-medium">{{ t('Order #') }}{{ order.id }}</p>
                <p class="text-sm text-gray-500">
                  {{ new Date(order.createdAt).toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' }) }}
                </p>
              </div>
              <div class="text-right">
                <p class="font-bold">{{ formatPrice(order.amount) }}</p>
                <UBadge :color="getOrderStatusColor(order.status)" variant="subtle">{{
                  t(order.status || 'pending')
                }}</UBadge>
              </div>
            </div>
          </div>

          <div v-else class="text-center py-8 text-gray-500">
            {{ t('No orders found.') }}
          </div>
        </UCard>
      </div>
    </div>

    <UCard v-else class="w-full max-w-md">
      <template #header>
        <div class="text-center">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            {{ t('Sign in to your account') }}
          </h1>
        </div>
      </template>

      <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
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
            autocomplete="current-password"
          />
        </UFormField>

        <div class="flex items-center justify-between">
          <UCheckbox v-model="state.remember" :label="t('Remember me')" />
          <UButton variant="link" :padded="false" color="primary" to="/auth/forgot-password">
            {{ t('Forgot password?') }}
          </UButton>
        </div>

        <UButton type="submit" block color="primary" size="lg" :loading="userStore.loading">
          {{ t('Sign in') }}
        </UButton>

        <p class="text-sm font-light text-center text-gray-500">
          {{ t('Don’t have an account yet?') }}
          <UButton variant="link" :padded="false" color="primary" to="/auth/register">
            {{ t('Sign up') }}
          </UButton>
        </p>
      </UForm>
    </UCard>
  </div>
</template>
