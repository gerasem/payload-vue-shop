import type { IToast, IToastAction } from '@/interfaces/IToast'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToastStore = defineStore('toast', () => {
  const toasts = ref<IToast[]>([])

  const addInfo = (
    title: string,
    description?: string,
    action?: IToastAction,
    duration?: number,
  ) => {
    toasts.value.push({
      title: title,
      description: description,
      type: 'info',
      action,
      duration,
    })
  }

  const addError = (
    title: string,
    description?: string,
    action?: IToastAction,
    duration?: number,
  ) => {
    toasts.value.push({
      title: title,
      description: description,
      type: 'error',
      action,
      duration,
    })
  }

  const addSuccess = (
    title: string,
    description?: string,
    action?: IToastAction,
    duration?: number,
  ) => {
    toasts.value.push({
      title: title,
      description: description,
      type: 'success',
      action,
      duration,
    })
  }

  return { toasts, addSuccess, addError, addInfo }
})
