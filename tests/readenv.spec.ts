// @ts-check
import { test, expect } from '@playwright/test';

test('read env test', async ({ page }) => {
  console.log('URL: ' + `${process.env.URL}`);

    await page.goto(`${process.env.URL}`);
   // await page.goto("https://www.yahoo.com");
  await page.getByRole('button', { name: 'Zum Ende' }).click();
  await page.getByRole('button', { name: 'Akzeptieren' }).click();


  //await expect(page).toHaveURL('https://search.yahoo.com/?q=playwright+by+testers+talk');
  // search with keywords
  await page.locator('#uh-sbq').click();
    await page.locator('#uh-sbq').fill('playwright by testers talk');
    await page.locator('#uh-sbq').press('Enter');
    console.log('URL: ' + process.env.URL);
    console.log('Username: ' + process.env.USERNAME);
    console.log('Password: ' + process.env.PASSWORD);
    await page.waitForTimeout(2000);
  
});
  