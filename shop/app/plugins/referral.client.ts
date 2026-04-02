/**
 * Captures the `ref` query parameter from the URL and stores it
 * as a cookie for 2 days so it survives navigation and can be
 * attached to orders created during checkout.
 */
export default defineNuxtPlugin(() => {
  const route = useRoute()
  const refCode = route.query.ref as string | undefined

  if (refCode) {
    const cookie = useCookie('referral_code', {
      maxAge: 2 * 24 * 60 * 60, // 2 days
      path: '/'
    })
    cookie.value = refCode
  }
})
