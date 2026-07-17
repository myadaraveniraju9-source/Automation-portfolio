import { test, expect } from '@playwright/test';

test('dropdown validation', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const country = page.locator('#country');
  await country.selectOption('canada');
  await expect(country).toHaveValue('canada');
});