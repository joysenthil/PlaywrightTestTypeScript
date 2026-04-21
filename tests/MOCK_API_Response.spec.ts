// @ts-check
import { test, expect } from '@playwright/test';

test('Mock testing using playwright API response', async ({ page }) => {

    //MOCK API response
    await page.route('*/**/api/v1/fruits', async route => {
        const response = await route.fetch();
        const json = await response.json();
        json.push({ id: 11, name: 'Playwright Script by testers talk' });
        json.push({ id: 12, name: 'API Response Mocking' });
        json.push({ id: 13, name: 'Postman api response' });
        json.push({ id: 14, name: 'single player list' });
        await route.fulfill({response,json});
    })
    //  Go to URL
    await page.goto('https://demo.playwright.dev/api-mocking');

    //Validate text
    await expect(page.getByText('Playwright Script by testers talk')).toBeVisible();
    await expect(page.getByText('API Response Mocking')).toBeVisible();
    await expect(page.getByText('Postman api response')).toBeVisible();
    await expect(page.getByText('single player list')).toBeVisible();
});