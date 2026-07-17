import{ test , expect } from '@playwright/test';


test ('facebooklogin ',  async ({ page }) => {


await page.goto("https://www.facebook.com/");


await page.getByRole(' textbox ', { name:' Email address or mobile number '}).fill( "rajuyadav") ;


await page.getByRole(' textbox ', { name:' password '}).fill( '123456' )


await page.getByRole('button',{ name: ' Login '})


await page.waitForTimeout(4000);

})
