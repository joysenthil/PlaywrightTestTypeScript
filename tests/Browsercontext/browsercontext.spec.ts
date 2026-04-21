  import { test, expect } from '@playwright/test';

  test('Multiple browser context tests in playwright', async ({ page, browser }) => {

    await page.goto('https://www.youtube.com/');
    await page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('Playwrigt testers talks');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
    await expect(page.locator('#header-description')).toContainText('Playwright by Testers Talk ✅');
    //await page.waitForTimeout(60000);

    // create new browser context and page
    const cont2 = await browser.newContext();
    const page2 = await cont2.newPage();
    await page2.goto('https://www.youtube.com/');
    await page2.getByLabel('Accept the use of cookies and other data for the purposes described').click();
    await page2.getByRole('combobox', { name: 'Search' }).click();
    await page2.getByRole('combobox', { name: 'Search' }).fill('Playwrigt testers talks');
    await page2.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page2.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
    await expect(page2.locator('#header-description')).toContainText('Playwright by Testers Talk ✅');

    // create new tab
     const newTab = await cont2.newPage();
     await newTab.goto('https://www.youtube.com/');
//    await newTab.getByRole('combobox', { name: 'Search' }).click();
    await newTab.getByRole('combobox', { name: 'Search' }).fill('Playwrigt testers talks');
    await newTab.getByRole('combobox', { name: 'Search' }).press('Enter');
   
  });