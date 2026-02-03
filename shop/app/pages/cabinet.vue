<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

usePageSeo({
  title: 'Log in to your account',
  description: 'Access your account dashboard to manage your orders and profile.'
})

const state = reactive({
  email: '',
  password: '',
  remember: false
})

const onSubmit = () => {
  // TODO: Implement login logic
  console.log('Login attempt', state)
}
</script>

<template>
  <div class="flex min-h-[50vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <UCard class="w-full max-w-md">
      <template #header>
        <div class="text-center">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
        </div>
      </template>

      <form class="space-y-6" @submit.prevent="onSubmit">
        <UFormGroup label="Email" name="email" required>
          <UInput v-model="state.email" type="email" placeholder="name@company.com" autocomplete="email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password" required>
          <UInput v-model="state.password" type="password" placeholder="••••••••" autocomplete="current-password" />
        </UFormGroup>

        <div class="flex items-center justify-between">
          <UCheckbox v-model="state.remember" label="Remember me" />
          <UButton variant="link" :padded="false" color="primary" to="/auth/forgot-password">
            Forgot password?
          </UButton>
        </div>

        <UButton type="submit" block color="primary" size="lg">
          Sign in
        </UButton>

        <p class="text-sm font-light text-center text-gray-500 dark:text-gray-400">
          Don’t have an account yet? 
          <UButton variant="link" :padded="false" color="primary" to="/auth/register">
            Sign up
          </UButton>
        </p>
      </form>
    </UCard>
  </div>
</template>
