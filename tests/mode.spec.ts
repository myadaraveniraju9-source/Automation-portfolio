import { test, expect } from '@playwright/test';

test('username invalid password valid Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('12_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.waitForTimeout(5000);
});

test('password invalid username valid', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('56_sauce');
    await page.locator('#login-button').click();
    await page.waitForTimeout(5000);
});
