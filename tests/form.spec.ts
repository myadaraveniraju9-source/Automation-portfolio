import { test, expect } from '@playwright/test';

test('fill the form', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.locator('#firstName').fill('rajuyadav');
  await page.locator('#lastName').fill('kumar');
  await expect(page.locator('#firstName')).toHaveValue('rajuyadav');
});