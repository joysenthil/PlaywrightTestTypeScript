// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Smoke testing', () => {
    test('Group test1', async ({ page }) => {

        console.log('Test started');
        // Navigate to the YouTube website
        await page.goto('https://www.yahoo.com/search?q=playwright+by+testers+talk');
        await page.getByRole('button', { name: 'Zum Ende' }).click();
        await page.getByRole('button', { name: 'Akzeptieren' }).click();


        await expect(page).toHaveURL('https://search.yahoo.com/?q=playwright+by+testers+talk');

        await expect.soft(page).toHaveTitle('Yahoo Search - Web Search');


        // await page.waitForTimeout(8000);

        //await page.locator('[aria-live="polite"]').click();

        await expect(page.getByPlaceholder('Search the web')).toHaveValue('playwright by testers talk');

        await expect(page.getByPlaceholder('Search the web')).toBeVisible();

        await expect(page.getByPlaceholder('Search the web')).toBeEnabled();
        await expect(page.getByPlaceholder('Search the web')).toBeEditable();

        await expect(page.getByPlaceholder('Search the web')).not.toBeEmpty();

        await page.getByPlaceholder('Search the web').press('Enter');

        await expect(page.locator('[target="_blank"]')).toHaveCount(40);
        // await page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
        // await page.getByPlaceholder('Search').click();
        // await page.getByPlaceholder('Search').fill('playwright by testers talk');
        // await page.getByPlaceholder('Search').press('Enter');
        // await expect(page.getByTestId('off')).toHaveText('playwright by testers talk');


        await page.waitForTimeout(8000);
    });

    test('Group test2', async ({ page }) => {

        console.log('Test started');
        // Navigate to the YouTube website
        await page.goto('https://www.yahoo.com/search?q=playwright+by+testers+talk');
        await page.getByRole('button', { name: 'Zum Ende' }).click();
        await page.getByRole('button', { name: 'Akzeptieren' }).click();


        await expect(page).toHaveURL('https://search.yahoo.com/?q=playwright+by+testers+talk');

        await expect.soft(page).toHaveTitle('Yahoo Search - Web Search');


        // await page.waitForTimeout(8000);

        //await page.locator('[aria-live="polite"]').click();

        await expect(page.getByPlaceholder('Search the web')).toHaveValue('playwright by testers talk');

        await expect(page.getByPlaceholder('Search the web')).toBeVisible();

        await expect(page.getByPlaceholder('Search the web')).toBeEnabled();
        await expect(page.getByPlaceholder('Search the web')).toBeEditable();

        await expect(page.getByPlaceholder('Search the web')).not.toBeEmpty();

        await page.getByPlaceholder('Search the web').press('Enter');

        await expect(page.locator('[target="_blank"]')).toHaveCount(40);
        // await page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
        // await page.getByPlaceholder('Search').click();
        // await page.getByPlaceholder('Search').fill('playwright by testers talk');
        // await page.getByPlaceholder('Search').press('Enter');
        // await expect(page.getByTestId('off')).toHaveText('playwright by testers talk');


        await page.waitForTimeout(8000);
    });

});

test.describe('Sanity  testing', () => {
    test('Group test3', async ({ page }) => {

        console.log('Test started');
        // Navigate to the YouTube website
        await page.goto('https://www.yahoo.com/search?q=playwright+by+testers+talk');
        await page.getByRole('button', { name: 'Zum Ende' }).click();
        await page.getByRole('button', { name: 'Akzeptieren' }).click();


        await expect(page).toHaveURL('https://search.yahoo.com/?q=playwright+by+testers+talk');

        await expect.soft(page).toHaveTitle('Yahoo Search - Web Search');


        // await page.waitForTimeout(8000);

        //await page.locator('[aria-live="polite"]').click();

        await expect(page.getByPlaceholder('Search the web')).toHaveValue('playwright by testers talk');

        await expect(page.getByPlaceholder('Search the web')).toBeVisible();

        await expect(page.getByPlaceholder('Search the web')).toBeEnabled();
        await expect(page.getByPlaceholder('Search the web')).toBeEditable();

        await expect(page.getByPlaceholder('Search the web')).not.toBeEmpty();

        await page.getByPlaceholder('Search the web').press('Enter');

        await expect(page.locator('[target="_blank"]')).toHaveCount(40);
        // await page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
        // await page.getByPlaceholder('Search').click();
        // await page.getByPlaceholder('Search').fill('playwright by testers talk');
        // await page.getByPlaceholder('Search').press('Enter');
        // await expect(page.getByTestId('off')).toHaveText('playwright by testers talk');


        await page.waitForTimeout(8000);
    });

    test('Group test4', async ({ page }) => {

        console.log('Test started');
        // Navigate to the YouTube website
        await page.goto('https://www.yahoo.com/search?q=playwright+by+testers+talk');
        await page.getByRole('button', { name: 'Zum Ende' }).click();
        await page.getByRole('button', { name: 'Akzeptieren' }).click();


        await expect(page).toHaveURL('https://search.yahoo.com/?q=playwright+by+testers+talk');

        await expect.soft(page).toHaveTitle('Yahoo Search - Web Search');


        // await page.waitForTimeout(8000);

        //await page.locator('[aria-live="polite"]').click();

        await expect(page.getByPlaceholder('Search the web')).toHaveValue('playwright by testers talk');

        await expect(page.getByPlaceholder('Search the web')).toBeVisible();

        await expect(page.getByPlaceholder('Search the web')).toBeEnabled();
        await expect(page.getByPlaceholder('Search the web')).toBeEditable();

        await expect(page.getByPlaceholder('Search the web')).not.toBeEmpty();

        await page.getByPlaceholder('Search the web').press('Enter');

        await expect(page.locator('[target="_blank"]')).toHaveCount(40);
        // await page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
        // await page.getByPlaceholder('Search').click();
        // await page.getByPlaceholder('Search').fill('playwright by testers talk');
        // await page.getByPlaceholder('Search').press('Enter');
        // await expect(page.getByTestId('off')).toHaveText('playwright by testers talk');


        await page.waitForTimeout(8000);
    });

    test('Group test5', async ({ page }) => {

        console.log('Test started');
        // Navigate to the YouTube website
        await page.goto('https://www.yahoo.com/search?q=playwright+by+testers+talk');
        await page.getByRole('button', { name: 'Zum Ende' }).click();
        await page.getByRole('button', { name: 'Akzeptieren' }).click();


        await expect(page).toHaveURL('https://search.yahoo.com/?q=playwright+by+testers+talk');

        await expect.soft(page).toHaveTitle('Yahoo Search - Web Search');


        // await page.waitForTimeout(8000);

        //await page.locator('[aria-live="polite"]').click();

        await expect(page.getByPlaceholder('Search the web')).toHaveValue('playwright by testers talk');

        await expect(page.getByPlaceholder('Search the web')).toBeVisible();

        await expect(page.getByPlaceholder('Search the web')).toBeEnabled();
        await expect(page.getByPlaceholder('Search the web')).toBeEditable();

        await expect(page.getByPlaceholder('Search the web')).not.toBeEmpty();

        await page.getByPlaceholder('Search the web').press('Enter');

        await expect(page.locator('[target="_blank"]')).toHaveCount(33);
        // await page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
        // await page.getByPlaceholder('Search').click();
        // await page.getByPlaceholder('Search').fill('playwright by testers talk');
        // await page.getByPlaceholder('Search').press('Enter');
        // await expect(page.getByTestId('off')).toHaveText('playwright by testers talk');


        await page.waitForTimeout(8000);
    });

});


