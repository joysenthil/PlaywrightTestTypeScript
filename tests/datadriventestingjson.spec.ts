// @ts-check
import { test, expect } from '@playwright/test';
import {ModuleTestdata} from '../test-data/qa/google.json';
import testData from '../test-data/qa/testdata.json';

  type TestData = {
    TestDataSet1: {
        Skill1: string,
        Skill2: string
    },
  TestDataSet2: {
        Skill1: string,
        Skill2 : string
    },
}

const typedTestData= testData as TestData;

for (const datasetName in typedTestData) {
const dataset =typedTestData[datasetName as keyof TestData];  
  
test(`datadriven testing of json test with ${dataset.Skill1}`, async ({ page }) => {
  //  await page.goto(`${process.env.URL}`);
  await page.goto('https://youtube.com/');
await page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
  
  //Search with placeholder
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill(dataset.Skill1);
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: dataset.Skill1 }).first().click();
// getByRole('link', { name: 'CYPRESS AUTOMATION : From Scratch To Advanced Frameworks' })
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(`${dataset.Skill1} - YouTube`);
  await page.waitForTimeout(2000);
  });
}