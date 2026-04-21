import { test, expect } from '@playwright/test';

test('iterating elements in playwright', async ({ page }) => {
  await page.goto('https://github.com/BakkappaN');
const reposLinks = await page.$$(".repo");
for (const link of reposLinks) {
    const text = await link.textContent();
    console.log('Repository name 1st loop:', text?.trim());
  }

  console.log('-----------------------------');

  for (let index = 0; index < reposLinks.length; index++) {
    const element = reposLinks[index];
    const text = await element.textContent();
    console.log('Repository name 2nd loop:', text?.trim());
  }
  const reposLinks2 = await page.locator(".repo");
  const count = await reposLinks2.count();
 console.log('-----------------------------');
    for (let index = 0; index < count; index++) {   
    const text = await reposLinks2.nth(index).textContent();
    console.log('Repository name 3rd loop:', text?.trim());
}
});