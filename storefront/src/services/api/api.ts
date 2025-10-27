import type { IInformationBanner } from '@/interfaces/IInformationBanner'
import { useLoaderStore } from '@/stores/LoaderStore'
import { useToastStore } from '@/stores/ToastStore'
import { sdk } from './config'

const CART_FIELDS =
  '*items,+items.total,*region,*items.product,*items.variant,*items.thumbnail,*items.metadata,*promotions,+shipping_methods.name'

class ApiService {
  static regionId = import.meta.env.VITE_DEFAULT_REGION_ID || ''

  protected static async handleRequest<T>(
    callback: () => Promise<T>,
    options: { loaderKey: string },
  ): Promise<T> {
    const loaderStore = useLoaderStore()

    try {
      loaderStore.startLoading(options.loaderKey)

      return await callback()
    } catch (error: unknown) {
      const toastStore = useToastStore()

      if (error instanceof Error) {
        console.error('API Error:', error.message)
        toastStore.addError(
          'API Error',
          error.message,
          {
            label: 'Reload Page',
            onClick: () => window.location.reload(),
          },
          10000,
        )
      }

      throw error
    } finally {
      loaderStore.stopLoading(options.loaderKey)
    }
  }

  // payload
  // todo fix locale
  static fetchInformationBanner = (
    loaderKey: string,
  ): Promise<IInformationBanner> => {
    return this.handleRequest(
      async () => {
        const { items } = await sdk.findGlobal({ slug: 'information-banner', locale: 'en' })
        console.log('items', items)
        return items || []
      },
      { loaderKey },
    )
  }

  static async fetchCategories(loaderKey: string) {
    return this.handleRequest(
      async () => {
        const { product_categories } = await sdk.store.category.list()

        return product_categories.map((product) => ({
          ...product,
          image: `https://placehold.co/200?text=${product.name}`,
        }))
      },
      { loaderKey },
    )
  }

  static async fetchItemsByCategory(categoryId: string, loaderKey: string, limit: number = 50) {
    return this.handleRequest(
      async () => {
        const { products } = await sdk.store.product.list({
          category_id: categoryId,
          region_id: this.regionId,
          limit,
          fields:
            'id,title,handle,thumbnail,*categories,*variants,+variants.calculated_price,+variants.inventory_quantity',
        })
        return products
      },
      { loaderKey },
    )
  }

  static async fetchItemByHandle(handle: string, loaderKey: string) {
    return this.handleRequest(
      async () => {
        const { products } = await sdk.store.product.list({
          handle,
          region_id: this.regionId,
          fields:
            '*categories,*variants.calculated_price,+variants.inventory_quantity,+metadata,+tags',
        })
        return products[0]
      },
      { loaderKey },
    )
  }

  static async createCart(loaderKey: string) {
    return ApiService.handleRequest(
      async () => {
        const { cart } = await sdk.store.cart.create({ region_id: this.regionId })
        return cart
      },
      { loaderKey },
    )
  }

  static async retrieveCart(cartId: string, loaderKey: string) {
    return ApiService.handleRequest(
      async () => {
        const { cart } = await sdk.store.cart.retrieve(cartId, {
          fields: CART_FIELDS,
        })
        return cart
      },
      { loaderKey },
    )
  }

  static async updateCart(cartId: string, data, loaderKey: string) {
    return ApiService.handleRequest(
      async () => {
        const { cart } = await sdk.store.cart.update(cartId, data, {
          fields: CART_FIELDS,
        })
        return cart
      },
      { loaderKey },
    )
  }

  static async createCartLineItem(
    cartId: string,
    data: { variant_id: string; quantity: number },
    loaderKey: string,
  ) {
    return ApiService.handleRequest(
      async () => {
        const { cart } = await sdk.store.cart.createLineItem(cartId, data, {
          fields: CART_FIELDS,
        })
        return cart
      },
      { loaderKey },
    )
  }

  static async updateCartLineItem(
    cartId: string,
    itemId: string,
    data: { quantity: number },
    loaderKey: string,
  ) {
    return ApiService.handleRequest(
      async () => {
        const { cart } = await sdk.store.cart.updateLineItem(cartId, itemId, data, {
          fields: CART_FIELDS,
        })
        return cart
      },
      { loaderKey },
    )
  }

  static async addCartShippingMethod(cartId: string, data, loaderKey: string) {
    return ApiService.handleRequest(
      async () => {
        const { cart } = await sdk.store.cart.addShippingMethod(cartId, data)
        return cart
      },
      { loaderKey },
    )
  }

  static async fetchItemQuantityForItem(
    itemId: string,
    variantId: string,
    loaderKey: string,
  ): Promise<number> {
    return ApiService.handleRequest(
      async () => {
        const { product } = await sdk.store.product.retrieve(itemId, {
          fields: `*variants.calculated_price,+variants.inventory_quantity`,
          region_id: this.regionId,
        })
        if (product.variants) {
          const variant = product.variants.find((v) => v.id === variantId)
          if (variant) {
            return variant.inventory_quantity || 0
          }
        }
        return 1000
      },
      { loaderKey },
    )
  }

  static async removeItem(cartId: string, item, loaderKey: string): Promise<void> {
    const toastStore = useToastStore()

    return ApiService.handleRequest(
      async () => {
        const { deleted } = await sdk.store.cart.deleteLineItem(cartId, item.id, {
          fields: CART_FIELDS,
        })

        if (deleted) {
          toastStore.addInfo(`Item ${item.title} has been deleted`)
        }
      },
      { loaderKey },
    )
  }

  static async fetchShippingOptions(cartId: string, loaderKey: string) {
    return ApiService.handleRequest(
      async () => {
        const { shipping_options } = await sdk.store.fulfillment.listCartOptions({
          cart_id: cartId,
        })
        return shipping_options
      },
      { loaderKey },
    )
  }

  static async fetchPaymentOptions(regionId: string, loaderKey: string) {
    return ApiService.handleRequest(
      async () => {
        const { payment_providers } = await sdk.store.payment.listPaymentProviders({
          region_id: regionId,
        })
        return payment_providers
      },
      { loaderKey },
    )
  }

  static async initiatePaymentSession(cart, data, loaderKey: string) {
    return ApiService.handleRequest(
      async () => {
        const { payment_collection } = await sdk.store.payment.initiatePaymentSession(cart, data)
        return payment_collection
      },
      { loaderKey },
    )

    // return sdk.store.payment
    //   .initiatePaymentSession(cart, data, {}, headers)
    //   .then(async (resp) => {
    //     const cartCacheTag = await getCacheTag('carts')
    //     revalidateTag(cartCacheTag)
    //     return resp
    //   })
    //   .catch(medusaError)
  }

  static async sendContactForm(): Promise<void> {
    const loaderStore = useLoaderStore()

    loaderStore.startLoading(loaderStore.LOADER_KEYS.SEND_CONTACT_FORM)

    setTimeout(() => {
      loaderStore.stopLoading(loaderStore.LOADER_KEYS.SEND_CONTACT_FORM)
    }, 1000)
  }

  /*
  sdk.store.payment.initiatePaymentSession(
  cart, // assuming you already have the cart object.
  {
    provider_id: "pp_stripe_stripe",
    data: {
      // any data relevant for the provider.
    }
  }
)
.then(({ payment_collection }) => {
  console.log(payment_collection)
})
  */
}

export default ApiService
