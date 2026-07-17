import { test, expect } from '@playwright/test';

test('double click example', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('raju');
    await page.getByPlaceholder('Password').fill('12345678');
    await page.locator('#login-button').click();
});