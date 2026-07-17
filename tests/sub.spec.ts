import{ test,expect } from '@playwright/test';
test('select subject', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    const sub_= page.locator('#subjectsInput');
    await sub .fill('ch')
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);

})