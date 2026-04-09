/**
 * Reads and clears the checkout session data stored in the httpOnly cookie.
 * Called by the payment success page to retrieve data needed for order confirmation.
 */
export default defineEventHandler(async (event) => {
  const raw = getCookie(event, 'checkout-session')

  if (!raw) {
    return {
      customerEmail: '',
      cartID: '',
      cartSecret: '',
      referralCode: ''
    }
  }

  // Clear the cookie after reading (one-time use)
  deleteCookie(event, 'checkout-session', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/'
  })

  try {
    return JSON.parse(raw)
  } catch {
    return {
      customerEmail: '',
      cartID: '',
      cartSecret: '',
      referralCode: ''
    }
  }
})
