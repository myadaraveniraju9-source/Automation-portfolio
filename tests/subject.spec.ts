import { test, expect } from '@playwright/test';
 
test('Select Subject English', async ({ page }) => {
 
  // Open DemoQA form
  await page.goto('https://demoqa.com/automation-practice-form');
 
 
  const sub_ = page.locator(' #subjectsInput ');
 
   await sub_.fill("p")
 
   await page.keyboard.press('Enter');
 
   await page.waitForTimeout(3000)
 
 // const sub_ = page.locator(' #subjectsInput ');
  
  //await sub_.fill("m")
  
  //await page.keyboard.press('Enter')
  
  //await page.waitForTimeout(4000)

})
 