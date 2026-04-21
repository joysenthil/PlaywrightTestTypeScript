//import { test, expect } from '@playwright/test';
import {test} from '../src/Fixture/Test_Fixture';


test('Fixturetest in playwright', async ({ page, homePage, resultPage, playListPage, testData}) => {

await homePage.goToURL();
console.log('Skill :'+ String(testData.TestDataSet1?.Skill1));
console.log('Skill :'+ String(testData.TestDataSet1?.Skill2));
await homePage.searchWithKeywords(String(testData.TestDataSet1?.Skill1));
await resultPage.clickOnPlaylist(String(testData.TestDataSet1?.Skill1));
await playListPage.validatePageTitle(`${String(testData.TestDataSet1?.Skill1)} - YouTube`);

});