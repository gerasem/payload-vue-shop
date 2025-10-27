<script setup lang="ts">
import { useDevice } from '@/composables/useDevice'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, watch } from 'vue'

const router = useRouter()
const route = useRoute()
const { isMobile } = useDevice()

const props = defineProps<{
  mobileMenu: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleMenu'): void
}>()

const toggleMenu = () => {
  if (!props.mobileMenu) {
    document.body.classList.add('overflow-hidden')
    router.push({ query: { menu: 'open' } })
  } else {
    document.body.classList.remove('overflow-hidden')
    router.replace({ query: {} })
  }
}

onMounted(() => {
  if (route.query?.menu === 'open') {
    router.replace({ query: {} })
  }
})

watch(
  () => route.query.menu,
  () => {
    emit('toggleMenu')
  },
)

watch(isMobile, () => {
  if (props.mobileMenu && !isMobile.value) {
    emit('toggleMenu')
    router.replace({ query: {} })
  }
})
</script>

<template>
  <a
    @click="toggleMenu()"
    class="navbar-burger is-hidden-tablet navbar__navbar-burger"
    :class="{ 'is-active': mobileMenu }"
    role="button"
    aria-label="menu"
    aria-expanded="false"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
</template>

<style lang="scss" scoped>
.navbar {
  &__navbar-burger {
    color: $color-icons;
  }
}
</style>
