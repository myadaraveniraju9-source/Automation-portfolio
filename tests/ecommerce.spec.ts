import { test, expect } from '@playwright/test';
import * as path from 'path';
import { pathToFileURL } from 'url';

const pageUrl = pathToFileURL(path.resolve(__dirname, '../ecommerce-project/index.html')).toString();

test('adds products to the cart and updates totals', async ({ page }) => {
  await page.goto(pageUrl);

  await expect(page).toHaveTitle(/Nova Store/);
  await expect(page.locator('#cart-count')).toHaveText('0');

  await page.locator('.add-btn').first().click();
  await expect(page.locator('#cart-count')).toHaveText('1');
  await expect(page.locator('#cart-items li')).toHaveCount(1);
  await expect(page.locator('#cart-total')).toHaveText('89');

  await page.locator('.add-btn').nth(1).click();
  await expect(page.locator('#cart-count')).toHaveText('2');
  await expect(page.locator('#cart-items li')).toHaveCount(2);
  await expect(page.locator('#cart-total')).toHaveText('134');
  await expect(page.locator('#cart-items')).toContainText('Aurora Backpack');
  await expect(page.locator('#cart-items')).toContainText('Glow Lamp');
  await waitfortimeout(3000);
  
});
