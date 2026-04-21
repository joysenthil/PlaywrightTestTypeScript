//import { test, expect } from '@playwright/test';
import {test} from '../src/Fixture/Test_Fixture';


test('Fixturetest in playwright', async ({ page, homePage, resultPage, playListPage }) => {

// await page.setViewportSize({ width: 1920, height: 479 });
console.log('Test is running...');
await homePage.goToURL();
await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORD}`);
await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORD}`);
await playListPage.validatePageTitle(`${process.env.SEARCH_KEYWORD} - YouTube`);
console.log('Test is completed...');
});