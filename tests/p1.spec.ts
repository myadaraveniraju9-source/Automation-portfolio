import { test, expect } from '@playwright/test';

test('test demoqa forms navigation', async ({ page }) => {
  await page.goto('https://demoqa.com/forms');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/forms/);
});
