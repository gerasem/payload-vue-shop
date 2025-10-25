type ToastType = 'info' | 'success' | 'error'

export interface IToastAction {
  label: string
  onClick: () => void
}

export interface IToast {
  title: string
  description?: string
  type: ToastType
  action?: IToastAction
  duration?: number
}
