// @ts-check
import { test, expect } from '@playwright/test';

test('Test1 @Tag1', async ({ page }) => {
  // Navigate to the YouTube website
  await page.goto('https://youtube.com/');
await page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
  
  //Search with placeholder
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('playwright by testers talk');
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: 'Playwright by Testers Talk' }).click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Playwright tutorial full course');
  await page.waitForTimeout(2000);
});
 
test('Test2 @Tag2', async ({ page }) => {
  // Navigate to the YouTube website
  await page.goto('https://youtube.com/');
await page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
  
  //Search with placeholder
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('playwright by testers talk');
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: 'Playwright by Testers Talk' }).click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Playwright by Testers Talk');
  await page.waitForTimeout(2000);
});
  
test('Test3 @Tag1', async ({ page }) => {
  // Navigate to the YouTube website
  await page.goto('https://youtube.com/');
await page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
  
  //Search with placeholder
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('playwright by testers talk');
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: 'Playwright by Testers Talk' }).click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Playwright tutorial full course');
  await page.waitForTimeout(2000);
});
  