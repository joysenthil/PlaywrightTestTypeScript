import { test, expect } from '@playwright/test';

test('Dropdownlist Test', async ({ page }) => {
  // Navigate to the YouTube website
  await page.goto('https://rediff.com/');

await page.getByText('Create Account').click();
const monthdropdown = page.locator('[class="middle month"]');
await monthdropdown.selectOption('05');
await monthdropdown.selectOption('SEP');
await expect(page.locator('[class="middle month"] > option')).toHaveText(['Month','JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']);


  await page.waitForTimeout(2000);
});