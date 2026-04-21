// @ts-check
import { test, expect } from '@playwright/test';

test('Mock API from HAR', async ({ page }) => {
    await page.routeFromHAR('./har/mock_api.har', {
        url: '*/**/api/v1/fruits',
        update: false
    })
    //  Go to URL
    await page.goto('https://demo.playwright.dev/api-mocking');

    //Validate text
    await expect(page.getByText('Strawberry')).toBeVisible();
    await expect(page.getByText('Playwright typescript by testers walk')).toBeVisible();
    await expect(page.getByText('Playwright javascript by testers walk')).toBeVisible();
    await expect(page.getByText('cypress by testers walk')).toBeVisible();
    await expect(page.getByText('api testing by testers walk')).toBeVisible();


});