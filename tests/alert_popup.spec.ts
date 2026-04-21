
import { test, expect } from '@playwright/test';

test('handling alert popups', async ({ page }) => {
await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

page.once('dialog',dialog =>{
    dialog.accept();
    console.log("Alert message: "+dialog.message());
       console.log("dialoage type : "+dialog.type());
   // dialog.dismiss();
})

await page.getByText("See an example alert",{exact:true}).click();


  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});


test('handling confirm popups', async ({ page }) => {
await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

page.once('dialog',dialog =>{
   // dialog.accept();
   dialog.dismiss();
    console.log("Alert message: "+dialog.message());
       console.log("dialoage type : "+dialog.type());
   // dialog.dismiss();
})

await page.getByText("See a sample confirm",{exact:true}).click();


  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});



test('handling prompt popups', async ({ page }) => {
await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

page.once('dialog',async(dialog) =>{
    await dialog.accept('playwright');
   //dialog.dismiss();
    console.log("Alert message: "+dialog.message());
        console.log("dialoage type : "+dialog.type());
   // dialog.dismiss();
})

await page.getByText("See a sample prompt",{exact:true}).click();


  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});

