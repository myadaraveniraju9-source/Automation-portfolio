import { test, expect } from '@playwright/test';

test('right click action', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

  const rck = page.getByText('right click me');
  await rck.click({ button: 'right' });
  await page.getByText('Paste').click();
  await page.waitForTimeout(3000);
});
