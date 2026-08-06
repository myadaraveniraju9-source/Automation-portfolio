import { test, expect } from '@playwright/test';
import { SourceDemoPage } from './pages/sourcedemo';

test('Login with valid credentials', async ({ page }) => {
  const sourceDemoPage = new SourceDemoPage(page);

  await sourceDemoPage.goto();
  await sourceDemoPage.login('Admin', 'admin123');

  await expect(page).toHaveURL(/dashboard/);
  await expect(sourceDemoPage.userDropdown).toBeVisible();
});

test('Login with invalid credentials', async ({ page }) => {
  const sourceDemoPage = new SourceDemoPage(page);

  await sourceDemoPage.goto();
  await sourceDemoPage.login('Admi', '1234');

  await expect(page).not.toHaveURL(/dashboard/);
  await expect(sourceDemoPage.userDropdown).not.toBeVisible();
});
