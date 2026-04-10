export default defineNuxtPlugin(async nuxtApp => {
  const cartStore = useCartStore()

  // Initialize cart on client side
  // This loads from localStorage and then hydrates product data
  await cartStore.init()
})
