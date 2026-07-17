import { test, expect } from '@playwright/test';
 
test('single frame', async ({ page }) => {
 
  // 1️⃣ Navigate to the application
  await page.goto('https://demo.automationtesting.in/Frames.html');
 
  // =================================================
  // ✅ SINGLE IFRAME
  // =================================================
 
  // Click on "Single Iframe" tab
  await page.getByRole('link', { name: 'Single Iframe', exact: true }).click();
 
  await page.frameLocator('#singleframe').locator("input[type='text']").fill('sai');
  await expect(page.frameLocator('#singleframe').locator("input[type='text']")).toHaveValue('sai');
 
});

 