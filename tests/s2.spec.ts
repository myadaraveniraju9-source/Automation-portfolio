import { test, expect } from '@playwright/test';

test('double click example', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByText('Copy Text').dblclick();
  await page.getByPlaceholder('Enter Name').fill('raju');
  await expect(page.getByPlaceholder('Enter Name')).toHaveValue('raju');
});