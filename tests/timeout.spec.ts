import { test, expect } from '@playwright/test';

test('timeout tests in playwright', async ({ page }) => {
  test.setTimeout(1*60*1000);
  await page.goto('https://www.youtube.com/');
  await page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
 await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Playwrigt testers talks');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

  //await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Playwright by Testerss Talk ✅' }).click({timeout: 5000});
  await expect(page.locator('#header-description')).toContainText('Playwright by Testers Talki ✅', { timeout: 5000 });
//await page.waitForTimeout(60000);
});