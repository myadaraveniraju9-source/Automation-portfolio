import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test('home page get started navigation', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await expect(page).toHaveTitle(/Playwright.dev/);

  await homePage.clickGetStarted();
  await expect(homePage.heroHeading).toBeVisible();
  await page.waitForTimeout(3000);
});
