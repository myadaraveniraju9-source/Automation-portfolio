import { test, expect } from '@playwright/test';

test (' Select Country Dropdown', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const country = page.locator('#country');

    await country.scrollIntoViewIfNeeded();

    await country.selectOption({ label: 'India' });

    await page.waitForTimeout(3000);

});