import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { ResultPage } from '../src/pages/ResultPage';
import { PlayListPage } from '../src/pages/PlayListPage';

test('Page Object Model test in playwright', async ({ page }) => {
//create object for home pagea
await page.setViewportSize({ width: 1920, height: 479 });
const homePAge=new HomePage(page);
await homePAge.goToURL();
await homePAge.searchWithKeywords(`${process.env.SEARCH_KEYWORD}`);
//create object fo3r result page
const resultPage=new ResultPage(page);
await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORD}`);

//create object for playlist page
const playListPage=new PlayListPage(page);
await playListPage.validatePageTitle(`${process.env.SEARCH_KEYWORD} - YouTube`);
});