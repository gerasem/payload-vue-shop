import { ref, onMounted, onUnmounted } from 'vue'

export function useDevice() {
  const isMobile = ref<boolean>(window.innerWidth < 768)

  const updateIsMobile = () => {
    isMobile.value = window.innerWidth < 768
  }

  onMounted(() => {
    window.addEventListener('resize', updateIsMobile)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateIsMobile)
  })

  return { isMobile }
}
