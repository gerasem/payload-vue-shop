import { test, expect, type Page } from '@playwright/test'

/**
 * E2E Checkout Flow Verification.
 * This test uses semantic 'data-test' attributes for stability and verifies
 * product addition, cart state, and checkout form data integrity.
 */

/**
 * Helper to dismiss the cookie banner if it appears.
 */
async function dismissCookieBanner(page: Page) {
  const acceptBtn = page.getByRole('button', { name: /Alle zustimmen|Accept all/i }).first()
  if (await acceptBtn.isVisible({ timeout: 3000 })) {
    await acceptBtn.click()
    // Wait for the banner to be hidden to prevent interaction interception
    await expect(acceptBtn).toBeHidden({ timeout: 5000 })
    await page.waitForTimeout(500)
  }
}

test.describe('E2E Checkout Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate and dismiss cookie banner first to ensure localStorage works
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    await dismissCookieBanner(page)
    // Clear cart/favorites state but preserve cookie consent
    await page.evaluate(() => {
      const consent = localStorage.getItem('cookie-consent')
      localStorage.clear()
      sessionStorage.clear()
      if (consent) localStorage.setItem('cookie-consent', consent)
    })
  })

  test('Completing the checkout flow and validating backend payload integrity', async ({ page }) => {
    // Test data for the checkout form
    const testData = {
      firstName: 'Playwright',
      lastName: 'Tester',
      email: 'tester@example.com',
      address: 'Validation Street 10',
      postalCode: '12345',
      city: 'Berlin'
    }

    // 1. Intercept the Payment Initiation API to verify payload sent to backend
    let capturedPayload: any = null
    await page.route('**/api/payments/stripe/initiate', async route => {
      const request = route.request()
      if (request.method() === 'POST') {
        capturedPayload = request.postDataJSON()
      }

      // Return a mock response so the UI proceeds to the payment page
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          clientSecret: 'pi_mock_secret_123',
          paymentIntentID: 'pi_mock_123',
          message: 'Mocked successful initiation'
        })
      })
    })

    // 2. Navigate to catalog and select a product
    await page.goto('/all-items')
    await dismissCookieBanner(page)

    const productLink = page.locator('a[href*="einladungs-set-anna-und-mark"]').first()
    await productLink.click()

    await page.waitForURL(/\/item\//)
    await page.waitForLoadState('networkidle')
    await dismissCookieBanner(page)
    
    // Add product to cart using stable data-test identifier
    const addToCartBtn = page.getByTestId('add-to-cart-button')
    await expect(addToCartBtn).toBeVisible({ timeout: 10000 })
    await addToCartBtn.click()

    // Wait for the toast notification confirming the add-to-cart succeeded
    await expect(
      page.getByText(/Added to cart|Zum Warenkorb hinzugefügt/i)
    ).toBeVisible({ timeout: 5000 })

    // 3. Navigate to Cart using data-test identifier
    await dismissCookieBanner(page)
    await page.getByTestId('cart-link').click()
    await page.waitForURL(/\/cart|warenkorb/)

    // 4. Verify item presence and quantity on the Cart page using scoped selectors
    const cartItem = page.getByTestId('cart-item').filter({ hasText: 'Anna & Mark' })
    await expect(cartItem).toBeVisible({ timeout: 10000 })
    await expect(cartItem.getByTestId('cart-quantity-input')).toHaveValue('1')

    // 5. Proceed to Checkout using data-test identifier
    await page.getByTestId('checkout-button').click()
    await page.waitForURL(/\/checkout/)

    // 6. Fill the Checkout Form using semantic data-test identifiers
    await page.getByTestId('first-name-input').fill(testData.firstName)
    await page.getByTestId('last-name-input').fill(testData.lastName)
    await page.getByTestId('email-input').fill(testData.email)
    await page.getByTestId('address-input').fill(testData.address)
    await page.getByTestId('postal-code-input').fill(testData.postalCode)
    await page.getByTestId('city-input').fill(testData.city)

    // 7. Submit the form
    const submitBtn = page.getByTestId('continue-to-payment-button')
    await submitBtn.click()

    // 8. Verify Payload Data Integrity
    // Wait for the API call to be intercepted and verify its content matches our test data
    await expect.poll(() => capturedPayload, { timeout: 15000 }).toBeTruthy()
    
    expect(capturedPayload.customerEmail).toBe(testData.email)
    expect(capturedPayload.shippingAddress.firstName).toBe(testData.firstName)
    expect(capturedPayload.shippingAddress.lastName).toBe(testData.lastName)
    expect(capturedPayload.shippingAddress.address).toBe(testData.address)

    // 9. Confirm transition to the Payment page
    await page.waitForURL(/\/payment/)
    await expect(page.locator('body')).toBeVisible()
  })
})
