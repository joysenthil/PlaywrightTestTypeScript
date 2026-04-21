// @ts-check
import { test, expect } from '@playwright/test';
import { parse } from 'node:path';

test('working with checkbox and radio buttons in playwright', async ({ page }) => {
  // Navigate to the YouTube website
  await page.goto('https://jqueryui.com/checkboxradio/');
  const frameElement = page.frameLocator('[class="demo-frame"]');

await expect(frameElement.locator('[for="radio-1"]')).not.toBeChecked();
await frameElement.locator('[for="radio-1"]').check();
await expect(frameElement.locator('[for="radio-1"]')).toBeChecked();  
  
});