import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

export function useDevice() {
  const { width } = useWindowSize()

  const isMobile = computed(() => width.value < 768)

  return { isMobile }
}
