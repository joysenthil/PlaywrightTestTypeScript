import { test, expect } from '@playwright/test';

test('get text & get attribute value in playwright', async ({ page }) => {
  await page.goto('https://github.com/BakkappaN');

  const text = await page.locator('[itemprop="name"]').innerText();
  const finalname = text?.trim();
  console.log('Text content:', finalname);
  expect(finalname).toBe('Testers Talk');

  const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-selected-links');
  console.log(`Attribute value is : ${attributeValue}`);
});