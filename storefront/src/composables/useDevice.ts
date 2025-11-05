import { ref, onMounted, onUnmounted } from 'vue'

export function useDevice() {
  const isMobile = ref(false)

  const updateIsMobile = () => {
    if (typeof window !== 'undefined') {
      isMobile.value = window.innerWidth < 768
    }
  }

  onMounted(() => {
    updateIsMobile()
    window.addEventListener('resize', updateIsMobile)
  })

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateIsMobile)
    }
  })

  return { isMobile }
}
