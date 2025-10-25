<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

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
  window.addEventListener('resize', handlerResize)
})

const handlerResize = () => {
  if (props.mobileMenu && window.innerWidth >= 768) {
    emit('toggleMenu')
    router.replace({ query: {} })
  }
}

watch(
  () => route.query.menu,
  () => {
    emit('toggleMenu')
  },
)

onUnmounted(() => window.removeEventListener('resize', handlerResize))
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
