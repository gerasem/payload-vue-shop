/**
 * Stores checkout session data in an encrypted httpOnly cookie
 * so that sensitive data (email, cart secret) is NOT passed via URL
 * when Stripe redirects back after payment.
 */
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Only store the fields needed for order confirmation
  const sessionData = {
    customerEmail: body.customerEmail || '',
    cartID: body.cartID || '',
    cartSecret: body.cartSecret || '',
    referralCode: body.referralCode || ''
  }

  // Store as a signed, httpOnly cookie that survives the Stripe redirect
  // Max age: 1 hour — more than enough for payment completion
  setCookie(event, 'checkout-session', JSON.stringify(sessionData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 3600 // 1 hour
  })

  return { success: true }
})
