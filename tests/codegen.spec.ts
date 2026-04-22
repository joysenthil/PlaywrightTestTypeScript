import { test, expect } from '@playwright/test';

test('code gen test case', { tag: ['@playwrightWithJenkins'] }, async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('button', { name: 'Accept the use of cookies and other data for the purposes described', exact: true }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Playwrigt testers talks');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  await expect(page.locator('#header-description')).toContainText('Playwright by Testers Talk ✅');
});

test('code gen test case will pass', { tag: ['@playwrightWithJenkins'] }, async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('button', { name: 'Accept the use of cookies and other data for the purposes described', exact: true }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Playwrigt testers talks');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  await expect(page.locator('#header-description')).toContainText('Playwright by Testers Talk ✅');
});