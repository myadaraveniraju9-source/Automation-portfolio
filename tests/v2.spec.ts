import { test, expect } from '@playwright/test';

test('Checkout Flow', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    const username = page.locator('[data-test="username"]');
    const password = page.locator('[data-test="password"]');
    const login = page.locator('[data-test="login-button"]');

    await username.fill('standard_user');
    await password.fill('secret_sauce');

    await login.click();

    const backpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    const tshirt = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    const light = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');

    await backpack.click();
    await tshirt.click();
    await light.click();

    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill('Raju');
    await page.locator('[data-test="lastName"]').fill('Sai');
    await page.locator('[data-test="postalCode"]').fill('505527');

    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();

    await expect(page.locator('.complete-header')).toContainText('Thank you');

    await page.waitForTimeout(4000)
    
});