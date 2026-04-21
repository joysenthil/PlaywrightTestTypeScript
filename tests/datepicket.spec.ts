// @ts-check
import { test, expect } from '@playwright/test';
import { parse } from 'node:path';

test('date picker in playwright', async ({ page }) => {
  // Navigate to the YouTube website
  await page.goto('https://jqueryui.com/datepicker/');

  const frameElement = page.frameLocator('[class="demo-frame"]');
  //await frameElement.locator('[id="datepicker"]').fill("10/10/2024");
  await frameElement.locator('[id="datepicker"]').click();
  //await frameElement.locator('.ui-datepicker-today').click();

  //Selecting past date
  //await  frameElement.locator('[title="Prev"]').click();
  //frameElement.locator('.hasDatepicker').fill('10/10/2024');

  //await  frameElement.locator('text="10"').click();

  //Selecting future date
  await  frameElement.locator('[title="Next"]').click();
  await  frameElement.locator('text="10"').click();
  //selecting dynamic date
  

  
});