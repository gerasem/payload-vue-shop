export default defineNuxtPlugin(nuxtApp => {
  const cartStore = useCartStore()

  // Initialize cart on client side
  // This loads from localStorage and then hydrates product data
  cartStore.init()
})
