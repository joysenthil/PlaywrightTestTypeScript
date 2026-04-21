import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ResultPage } from '../pages/ResultPage';
import { PlayListPage } from '../pages/PlayListPage';

import { ModuleTestData } from '../Interface/Module.interface';
import { loadTestData } from '../utils/Jsonhelper'; 


/**
 * author Testers Talk
 */
export const test = base.extend<{
    saveLogs: void;
    homePage: HomePage;
    resultPage: ResultPage;
    playListPage: PlayListPage;
    testData: ModuleTestData;
 }>({
    saveLogs: [async ({ }, use) => {
        console.log('Global before is running...');

        await use();

        console.log('Global afterEach is running...');
    },
    { auto: true }],
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    resultPage: async ({ page }, use) => {
        const resultPage = new ResultPage(page);
        await use(resultPage);
    },
    playListPage: async ({ page }, use) => {
        const playListPage = new PlayListPage(page);
        await use(playListPage);
    },
    testData: async ({ }, use) => {
        const data = await loadTestData();
        await use(data);
    }
});

export { expect } from '@playwright/test'