// @ts-check
import { test, expect } from '@playwright/test';
import path from 'path'; 
import { readExcelFile } from '../src/utils/excelhelper';

const filePath = path.join(__dirname, '../test-data/qa/TestData.xlsx');
const records = readExcelFile(filePath);

for (const record of records){
const dataset =record;  
  
test(`datadriven testing of json test with ${dataset.Skill2}`, async ({ page }) => {
  //  await page.goto(`${process.env.URL}`);
  await page.goto('https://youtube.com/');
await page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
  
  //Search with placeholder
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill(dataset.Skill2);
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: dataset.Skill2 }).first().click();
// getByRole('link', { name: 'CYPRESS AUTOMATION : From Scratch To Advanced Frameworks' })
// Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(`${dataset.Skill2} - YouTube`);
  await page.waitForTimeout(2000);
  });
}