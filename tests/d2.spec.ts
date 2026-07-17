import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await expect(page.getByText('Automation Testing Practice'))

    await expect(page.getByRole('link', { name: 'HOME' }))
    await expect(page.getByRole('link', { name: 'UDEMY' }))
    await expect(page.getByRole('link', { name: 'ONLINE TRAINING' }))
    
    await expect(
    page.getByRole('heading', { name: 'DATA ENTRY FORM' }))

    await page.getByRole('textbox', { name: 'Name' }).fill('raju');
    await page.getByRole('textbox', { name: 'Email' }).fill('myadaraveniraju9@gmail.com');
    await page.getByRole('textbox', { name: 'Phone' }).fill('6301315812');

    await page.waitForTimeout(4000);
});