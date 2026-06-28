import { test, expect } from '@playwright/test'

const FIRST_SLUG = 'diamond-pave-bangle'

// Clear persisted cart before each test so they don't bleed into each other
test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.evaluate(() => localStorage.removeItem('splatterimpacts-cart'))
})

async function addFirstProductToCart(page: any) {
  await page.goto('/shop')
  // Wait for products to render (static data, should be fast)
  const firstCard = page.locator('article').first()
  await expect(firstCard).toBeVisible({ timeout: 10_000 })
  await firstCard.hover()
  const quickAdd = firstCard.getByText('Quick Add')
  await expect(quickAdd).toBeVisible({ timeout: 5_000 })
  await quickAdd.click()
  // Wait for the cart drawer to open
  const drawer = page.getByRole('dialog', { name: /shopping cart/i })
  await expect(drawer).toBeVisible({ timeout: 5_000 })
  return drawer
}

test.describe('Buying workflow', () => {
  test('shop page loads with products', async ({ page }) => {
    await page.goto('/shop')
    await expect(page).toHaveTitle(/Shop/i)
    const cards = page.locator('article')
    await expect(cards.first()).toBeVisible({ timeout: 10_000 })
    expect(await cards.count()).toBeGreaterThan(0)
  })

  test('quick-add puts item in cart and opens drawer', async ({ page }) => {
    const drawer = await addFirstProductToCart(page)
    await expect(drawer.getByText(/1 item/i)).toBeVisible()
  })

  test('cart drawer has working checkout link', async ({ page }) => {
    const drawer = await addFirstProductToCart(page)
    const link = drawer.getByRole('link', { name: /checkout/i })
    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', '/checkout')
  })

  test('checkout page shows cart items and total', async ({ page }) => {
    const drawer = await addFirstProductToCart(page)
    await drawer.getByRole('link', { name: /checkout/i }).click()
    await page.waitForURL('**/checkout')
    await expect(page.locator('h1')).toContainText(/review/i)

    // At least one product row shown
    const items = page.locator('ul li')
    await expect(items.first()).toBeVisible()

    // Checkout CTA is present
    await expect(page.getByRole('button', { name: /secure checkout/i })).toBeVisible()
  })

  test('checkout button calls /api/checkout and redirects to hosted checkout', async ({ page }) => {
    // Intercept checkout creation so no real Shopify store is needed
    await page.route('/api/checkout', async (route) => {
      const body = await route.request().postDataJSON()
      // Verify the request body shape
      expect(Array.isArray(body?.items)).toBeTruthy()
      expect(body.items.length).toBeGreaterThan(0)

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ url: '/success?session_id=test_e2e' }),
      })
    })

    const drawer = await addFirstProductToCart(page)
    await drawer.getByRole('link', { name: /checkout/i }).click()
    await page.waitForURL('**/checkout')

    await page.getByRole('button', { name: /secure checkout/i }).click()

    // Should land on success page (via the mocked redirect)
    await page.waitForURL(/\/success/, { timeout: 10_000 })
    await expect(page.locator('h1')).toContainText(/thank you/i)
  })

  test('product detail page add-to-cart works', async ({ page }) => {
    await page.goto(`/shop/${FIRST_SLUG}`)
    const addBtn = page.getByRole('button', { name: /add to cart/i })
    await expect(addBtn).toBeVisible({ timeout: 10_000 })
    await addBtn.click()
    const drawer = page.getByRole('dialog', { name: /shopping cart/i })
    await expect(drawer).toBeVisible({ timeout: 5_000 })
    await expect(drawer.getByText(/1 item/i)).toBeVisible()
  })

  test('success page renders order confirmation', async ({ page }) => {
    await page.goto('/success?session_id=test_e2e')
    await expect(page.locator('h1')).toContainText(/thank you/i)
    await expect(page.getByText(/order confirmed/i)).toBeVisible()
    await expect(page.getByRole('link', { name: /continue shopping/i })).toBeVisible()
  })
})

test.describe('Page availability', () => {
  const routes = ['/', '/shop', '/about', '/contact', '/journal', '/sizing', '/shipping-returns']

  for (const route of routes) {
    test(`${route} returns 2xx`, async ({ page }) => {
      const response = await page.goto(route)
      expect(response?.status()).toBeLessThan(400)
    })
  }
})
