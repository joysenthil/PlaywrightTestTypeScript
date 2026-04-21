import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.github.com/BakkappaN');
 //get by label
//  await page.getByLabel("Homepage",{exact: true}).first().click();

//get by Test id
  await page.getByTestId("projects").first().click();
});