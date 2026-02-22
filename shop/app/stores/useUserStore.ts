import { defineStore } from 'pinia'

interface User {
  id: number
  email: string
  name?: string
  surname?: string
  roles?: string[]
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)
  const loggedIn = computed(() => !!user.value)
  const loading = ref(false)
  const config = useRuntimeConfig()

  // Helper for API calls was replaced by usePayloadFetch

  async function login(email: string, password: string) {
    loading.value = true
    try {
      // $fetch throws on error automatically
      const data = await $payloadFetch<{ user: User; token?: string }>('/api/users/login', {
        method: 'POST',
        body: { email, password }
      })

      if (data?.user) {
        user.value = data.user
        if (data.token) token.value = data.token
      }
    } catch (err: any) {
      console.error('Login error:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    loading.value = true
    try {
      await $payloadFetch('/api/users/logout', { method: 'POST' })
      user.value = null
      token.value = null
    } catch (err) {
      console.error('Logout error:', err)
    } finally {
      loading.value = false
    }
  }

  async function register(email: string, password: string, name: string) {
    loading.value = true
    try {
      await $payloadFetch('/api/users', {
        method: 'POST',
        body: { email, password, passwordConfirm: password, name }
      })
      // Auto login after registration
      await login(email, password)
    } catch (err: any) {
      console.error('Registration error:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  async function forgotPassword(email: string) {
    loading.value = true
    try {
      await $payloadFetch('/api/users/forgot-password', {
        method: 'POST',
        body: { email }
      })
    } catch (err: any) {
      console.error('Forgot password error:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  async function fetchUser(headers: any = {}) {
    try {
      const data = await $payloadFetch<{ user: User }>('/api/users/me', {
        headers
      })
      if (data?.user) {
        user.value = data.user
      } else {
        user.value = null
      }
    } catch (e) {
      user.value = null
    }
  }

  return {
    user,
    token,
    loggedIn,
    loading,
    login,
    logout,
    register,
    forgotPassword,
    fetchUser
  }
})
