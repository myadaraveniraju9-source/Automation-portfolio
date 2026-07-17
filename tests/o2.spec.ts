import { test, expect } from '@playwright/test';

test('open a browser', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByPlaceholder('Enter Name').fill('ramu');
  await page.getByPlaceholder('Enter Email').fill('myadaraveniraju9@gmail.com');
  await expect(page.getByPlaceholder('Enter Name')).toHaveValue('ramu');
});