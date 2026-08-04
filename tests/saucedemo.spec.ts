import ( test, expect) from "@playwright/test";
 
import( loginpage )'../pages/loglinpage';

 
test ('Validlogin') async({ page })=>{

    const loginpage = new loginpage(page);
    await loginpage.gotoUrl()
    await loginpage.saueodemo()
    await page.waitfortimeout(3000)

})




