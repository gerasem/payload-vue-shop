import { defineStore } from 'pinia'

interface User {
  id: number
  email: string
  name?: string
  roles?: string[]
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const loggedIn = computed(() => !!user.value)
  const loading = ref(false)
  const config = useRuntimeConfig()


  // Helper for API calls using $fetch directly
  const apiCall = async <T>(url: string, options: any = {}, headers: any = {}) => {
    return await $fetch<T>(url, {
      baseURL: config.public.payloadUrl as string,
      credentials: 'include',
      headers: {
        ...headers,
        ...options.headers
      },
      ...options
    })
  }

  async function login(email: string, password: string) {
    loading.value = true
    try {
      // $fetch throws on error automatically
      const data = await apiCall<{ user: User; token?: string }>('/api/users/login', {
        method: 'POST',
        body: { email, password }
      })

      if (data && data.user) {
        user.value = data.user
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
      await apiCall('/api/users/logout', { method: 'POST' })
      user.value = null
    } catch (err) {
      console.error('Logout error:', err)
    } finally {
      loading.value = false
    }
  }

  async function fetchUser(headers: any = {}) {
    try {
      const data = await apiCall<{ user: User }>('/api/users/me', {}, headers)
      if (data && data.user) {
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
    loggedIn,
    loading,
    login,
    logout,
    fetchUser
  }
})
