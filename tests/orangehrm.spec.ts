import { test, expect } from '@playwright/test';
import { OrangeHRMPage } from './pages/OrangeHRMPage';

test('OrangeHRM login with valid credentials', async ({ page }) => {
  const orangeHRM = new OrangeHRMPage(page);

  await orangeHRM.goto();
  await orangeHRM.login('Admin', 'admin123');

  await expect(page).toHaveURL(/dashboard/);
  await expect(orangeHRM.userDropdown).toBeVisible();
});

test('OrangeHRM login with invalid credentials', async ({ page }) => {
  const orangeHRM = new OrangeHRMPage(page);

  await orangeHRM.goto();
  await orangeHRM.login('Admi', '1234');

  await expect(page).not.toHaveURL(/dashboard/);
  await expect(orangeHRM.userDropdown).not.toBeVisible();
});