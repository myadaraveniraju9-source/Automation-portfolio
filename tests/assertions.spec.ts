//import ( test, expect ) from ' @playwright/test ';

//test (' assertions ', async ({ page }) => {

  //  await page.goto (' https://testautomationpractice.blogspot.com/ ');


   //const name_fld = await page.getByplaceholder(" Enter name ");

   //await expect ('name_fld').toBeEmpty()

   //await page.waitForTimeout(5000)
import { test, expect } from '@playwright/test'

test('Assertions', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const name_fld = page.getByPlaceholder('Enter Name');

  await expect(name_fld).toBeVisible();
  await expect(name_fld).toBeEditable();
  await expect(name_fld).toHaveAttribute('placeholder', 'Enter Name');

  await name_fld.fill('Shiva');
  await expect(name_fld).toHaveValue('Shiva');
});
 