import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { Plugin } from 'payload'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { ecommercePlugin } from '@payloadcms/plugin-ecommerce'

import { stripeAdapter } from '@payloadcms/plugin-ecommerce/payments/stripe'

import { Page, Product } from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'
import { ProductsCollection } from '@/collections/Products'
import { adminOrCustomerOwner } from '@/access/adminOrCustomerOwner'
import { adminOrPublishedStatus } from '@/access/adminOrPublishedStatus'
import { adminOnly } from '@/access/adminOnly'
import { adminOnlyFieldAccess } from '@/access/adminOnlyFieldAccess'
import { customerOnlyFieldAccess } from '@/access/customerOnlyFieldAccess'

const generateTitle: GenerateTitle<Product | Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | Payload Ecommerce Template` : 'Payload Ecommerce Template'
}

const generateURL: GenerateURL<Product | Page> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
  seoPlugin({
    generateTitle,
    generateURL,
  }),
  formBuilderPlugin({
    fields: {
      payment: false,
    },
    formSubmissionOverrides: {
      admin: {
        group: 'Content',
      },
    },
    formOverrides: {
      admin: {
        group: 'Content',
      },
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'confirmationMessage') {
            return {
              ...field,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  ]
                },
              }),
            }
          }
          return field
        })
      },
    },
  }),
  ecommercePlugin({
    access: {
      isAdmin: adminOnly,
      adminOnlyFieldAccess,
      isDocumentOwner: adminOrCustomerOwner,
      adminOrPublishedStatus,
      customerOnlyFieldAccess,
    },
    customers: {
      slug: 'users',
    },
    carts: {
      allowGuestCarts: true,
    },
    ...(process.env.STRIPE_SECRET_KEY
      ? {
          payments: {
            paymentMethods: [
              (() => {
                const baseAdapter = stripeAdapter({
                  secretKey: process.env.STRIPE_SECRET_KEY,
                  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '',
                  webhookSecret: process.env.STRIPE_WEBHOOKS_SIGNING_SECRET ?? '',
                })

                return {
                  ...baseAdapter,
                  initiatePayment: async (args: any) => {
                    // Intercept initiatePayment to inject shipping cost
                    const { req, data } = args
                    const shippingMethodId = req.data?.shippingMethodId
                    const couponCode = req.data?.couponCode

                    if (data.cart?.subtotal) {
                      try {
                        // 1. Apply Coupon Discount
                        if (couponCode) {
                          const coupons = await req.payload.find({
                            collection: 'coupons',
                            where: {
                              code: {
                                equals: typeof couponCode === 'string' ? couponCode.toUpperCase() : couponCode,
                              },
                            },
                            depth: 0,
                          })
                          const coupon = coupons.docs[0]
                          if (coupon) {
                            // Check expiration
                            const isExpired = coupon.expirationDate && new Date(coupon.expirationDate) < new Date()
                            if (!isExpired && typeof coupon.discountPercentage === 'number') {
                              // Subtotal is in cents, keep it an integer
                              const discountAmount = Math.round(data.cart.subtotal * (coupon.discountPercentage / 100))
                              data.cart.subtotal -= discountAmount
                            }
                          }
                        }

                        // 2. Add Shipping Cost
                        if (shippingMethodId) {
                          const shippingSettings = await req.payload.findGlobal({
                            slug: 'shipping-settings',
                            depth: 0,
                          })
                          
                          const methods = shippingSettings?.shippingMethods || []
                          const method = methods.find((m: any) => m.id === shippingMethodId)
                          
                          if (method && typeof method.price === 'number') {
                            const threshold = shippingSettings?.minimumOrderAmount || Infinity
                            if (data.cart.subtotal < threshold) {
                              // Add shipping price to the discounted cart subtotal
                              data.cart.subtotal += method.price
                            }
                          }
                        }
                      } catch (err) {
                        req.payload.logger.error(err, 'Error calculating shipping/coupon in custom stripe adapter')
                      }
                    }

                    return baseAdapter.initiatePayment(args)
                  },

                  confirmOrder: async (args: any) => {
                    const result = await baseAdapter.confirmOrder(args)

                    // Attach referral code to the created order (if valid)
                    const referralCode = args.data?.referralCode
                    if (referralCode && result.orderID) {
                      try {
                        // Validate referral exists in the referrals collection
                        const referrals = await args.req.payload.find({
                          collection: 'referrals',
                          where: { name: { equals: referralCode } },
                          depth: 0,
                        })
                        if (referrals.docs.length > 0) {
                          await args.req.payload.update({
                            id: result.orderID,
                            collection: 'orders',
                            data: { referralCode },
                          })
                        }
                      } catch (err) {
                        args.req.payload.logger.error(err, 'Error attaching referral code to order')
                      }
                    }

                    return result
                  },
                }
              })(),
            ],
          },
        }
      : {}),
    products: {
      productsCollectionOverride: ProductsCollection,
    },
    orders: {
      ordersCollectionOverride: ({ defaultCollection }) => ({
        ...defaultCollection,
        fields: [
          ...defaultCollection.fields,
          {
            name: 'referralCode',
            type: 'text',
            label: 'Referral',
            admin: {
              position: 'sidebar',
              readOnly: true,
            },
          },
        ],
      }),
    },
    currencies: {
      supportedCurrencies: [
        {
          code: 'EUR',
          decimals: 2,
          label: 'Euro',
          symbol: '€',
        },
      ],
      defaultCurrency: 'EUR',
    },
  }),
]
