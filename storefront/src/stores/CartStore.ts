import { useLoaderStore } from '@/stores/LoaderStore'
// import type { HttpTypes } from '@medusajs/types'
import ApiService from '@/services/api/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<undefined>(undefined)
  const shippingOptions = ref<undefined>(undefined)
  const paymentOptions = ref<undefined>(undefined)
  const paymentCollection = ref<undefined>(undefined)

  const loaderStore = useLoaderStore()

  const initializeCart = async () => {
    const cartId = localStorage.getItem('cart_id')
    if (cartId) {
      const dataCart = await ApiService.retrieveCart(
        cartId,
        loaderStore.LOADER_KEYS.INITIALIZE_CART,
      )

      console.log('retrieveCart', dataCart)
      if (dataCart) {
        cart.value = dataCart
      } else {
        await refreshCart()
      }
    } else {
      await refreshCart()
    }
  }

  const refreshCart = async () => {
    console.log('Refresh cart')
    const dataCart = await ApiService.createCart(loaderStore.LOADER_KEYS.ADD_TO_CART)
    cart.value = dataCart
    localStorage.setItem('cart_id', dataCart.id)
    return dataCart
  }

  const addToCart = async (variantId: string, quantity: number) => {
    if (!cart.value) {
      await refreshCart()
      throw new Error('Error initializing cart')
    }

    const dataCart = await ApiService.createCartLineItem(
      cart.value?.id,
      {
        variant_id: variantId,
        quantity,
      },
      loaderStore.LOADER_KEYS.ADD_TO_CART,
    )
    console.log('addToCart get cart', dataCart)
    cart.value = dataCart
    localStorage.setItem('cart_id', dataCart.id)
    return dataCart
  }

  //todo refactoring needs
  const updateCart = async ({
    updateData,
    shippingMethodData,
  }: {
    updateData,
    shippingMethodData
  }): Promise<void> => {
    console.log('updateData', updateData)
    console.log('cart.value', cart.value)
    console.log('false?', !cart.value || !updateData)
    if (!cart.value) {
      return
    }

    try {
      let returnedCart = cart.value
      if (updateData) {
        returnedCart = await ApiService.updateCart(
          cart.value.id,
          updateData,
          loaderStore.LOADER_KEYS.EDIT_CART,
        )
      }
      if (shippingMethodData) {
        returnedCart = await ApiService.addCartShippingMethod(
          cart.value.id,
          shippingMethodData,
          loaderStore.LOADER_KEYS.EDIT_CART,
        )
      }
      cart.value = returnedCart
      localStorage.setItem('cart_id', returnedCart.id)
    } catch (err) {
      console.error('Error update cart:', err)
    }
  }

  const updateItemQuantity = async (itemId: string, quantity: number): Promise<void> => {
    if (!cart.value) {
      return
    }

    const dataCart = await ApiService.updateCartLineItem(
      cart.value.id,
      itemId,
      { quantity },
      loaderStore.LOADER_KEYS.EDIT_CART,
    )
    cart.value = dataCart
    localStorage.setItem('cart_id', dataCart.id)
    //return dataCart
  }

  const getItemQuantity = async (itemId: string, variantId: string): Promise<number> => {
    return await ApiService.fetchItemQuantityForItem(
      itemId,
      variantId,
      loaderStore.LOADER_KEYS.GET_ITEM_QUANTITY,
    )
  }

  const unsetCart = () => {
    cart.value = undefined
    localStorage.removeItem('cart_id')
  }

  const removeItem = async (item): Promise<void> => {
    if (cart.value) {
      await ApiService.removeItem(cart.value.id, item, loaderStore.LOADER_KEYS.ADD_TO_CART)

      await initializeCart()
    }
  }

  const getShippingOptions = async (): Promise<void> => {
    if (!cart.value) {
      return
    }
    shippingOptions.value = await ApiService.fetchShippingOptions(
      cart.value.id,
      loaderStore.LOADER_KEYS.EDIT_CART,
    )
  }

  const selectShippingOption = async (optionId: string) => {
    if (!cart.value) {
      return
    }

    if (optionId !== '') {
      const returnedCart = await ApiService.addCartShippingMethod(
        cart.value.id,
        { option_id: optionId },
        loaderStore.LOADER_KEYS.EDIT_CART,
      )

      cart.value = returnedCart
    }
  }

  const selectPaymentOption = async (selectedPaymentMethod: string) => {
    if (!cart.value) {
      return
    }

    if (selectedPaymentMethod !== '') {
      const returnedPaymentSession = await ApiService.initiatePaymentSession(
        cart.value,
        { provider_id: selectedPaymentMethod },
        loaderStore.LOADER_KEYS.EDIT_CART,
      )

      console.log('test selectPaymentOption', returnedPaymentSession)
      if (returnedPaymentSession?.payment_sessions && returnedPaymentSession?.payment_sessions[0]) {
        paymentCollection.value = returnedPaymentSession?.payment_sessions[0]
      }
    }
  }

  const getPaymentOptions = async (): Promise<void> => {
    if (!cart.value || !cart.value?.region_id) {
      return
    }

    paymentOptions.value = await ApiService.fetchPaymentOptions(
      cart.value.region_id,
      loaderStore.LOADER_KEYS.EDIT_CART,
    )
  }

  return {
    cart,
    shippingOptions,
    initializeCart,
    addToCart,
    refreshCart,
    updateItemQuantity,
    unsetCart,
    getItemQuantity,
    removeItem,
    updateCart,
    getShippingOptions,
    selectShippingOption,
    getPaymentOptions,
    paymentOptions,
    selectPaymentOption,
  }
})
