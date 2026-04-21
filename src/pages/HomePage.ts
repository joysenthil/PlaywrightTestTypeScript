import { Locator, Page } from "@playwright/test";

    export class HomePage {
        readonly page:Page;
        
    readonly searchTextBox:Locator;

    constructor(page:Page) {
        this.page=page;
         this.searchTextBox=page.locator('[name="search_query"]');
    }   

    async goToURL(){
        if(process.env.ENV === 'qa'){   
        await this.page.goto(`${process.env.YOUTUBE_URL}`);
        await this.page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
        console.log('Test are running in '+ process.env.ENV + ' environment');
        } else if(process.env.ENV === 'staging'){
            await this.page.goto(`${process.env.YOUTUBE_URL}`);
            await this.page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
            console.log('Test are running in '+ process.env.ENV  + ' environment');
        }
    }

    async searchWithKeywords(keyword:string){
        await this.searchTextBox.click();  
        await this.searchTextBox.fill(keyword);
        await this.searchTextBox.press('Enter');
    }
}