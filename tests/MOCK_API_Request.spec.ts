// @ts-check
import { test, expect } from '@playwright/test';

test('Mock testing using playwright', async ({ page }) => {

    //MOCK API request
    await page.route('*/**/api/v1/fruits', async route => {

        const json = [
            { id: 11, name: 'Apple' },
            { id: 12, name: 'Banana' },
            { id: 13, name: 'Cherry' },
            { id: 14, name: 'Date' }
        ];
        await route.fulfill({json});
    })
    //  Go to URL
    await page.goto('https://demo.playwright.dev/api-mocking');

    //Validate text
    await expect(page.getByText('Apple')).toBeVisible();
    await expect(page.getByText('Banana')).toBeVisible();
    await expect(page.getByText('Cherry')).toBeVisible();
    await expect(page.getByText('Date')).toBeVisible();
});