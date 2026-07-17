import { test, expect } from '@playwright/test';

test('open browser', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  await page.locator('#email').fill('rajuyadav');
  await page.locator('#pass').fill('123456');

  await page.waitForTimeout(3000);
});