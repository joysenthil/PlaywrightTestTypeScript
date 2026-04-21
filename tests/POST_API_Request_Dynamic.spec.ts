import { test, expect } from '@playwright/test';

import { formatAPIRequest } from '../src/utils/APIHelper';
import  fs from 'fs';
import  path from 'path';

import {faker} from '@faker-js/faker';

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('create POST API request using dynamic data' , async ({ request}) => {
   //Reading json file
    const filePath=path.join(__dirname,'../test-data/api_requests/Dynamic_API_Request.json'); 
    const requestTemplate = fs.readFileSync(filePath, 'utf-8');
    const values = ['Cypress typescript by testers talk', 'javascript typescript by testers talk', '1000', 'super bowls'];
    //updateing post API request body with dynamic data
    const postAPIRequestData = await formatAPIRequest(requestTemplate, values);    
    // Make a POST API request
 const postAPIResponse = await request.post('/booking',{data: JSON.parse(postAPIRequestData)}); 
 // Print API response
 const jsonPostAPIResponse=await postAPIResponse.json();
console.log('PostAPIResponse :'+JSON.stringify(jsonPostAPIResponse,null,2));
//Validate API response
expect(postAPIResponse.status()).toBe(200);
expect(postAPIResponse.statusText()).toBe('OK');
expect(postAPIResponse.headers()['content-type']).toContain('application/json');

//Validate key value from API response
expect(jsonPostAPIResponse.booking).toHaveProperty('firstname');
expect(jsonPostAPIResponse.booking).toHaveProperty('lastname');

expect(jsonPostAPIResponse.booking.bookingdates).toHaveProperty('checkin');
expect(jsonPostAPIResponse.booking.bookingdates).toHaveProperty('checkout');

//VadlidateAPI response body
expect(jsonPostAPIResponse.bookingid).toBeGreaterThan(0);
expect(jsonPostAPIResponse.booking.firstname).toBe("Cypress typescript by testers talk");
expect(jsonPostAPIResponse.booking.lastname).toBe("javascript    typescript by testers talk");
expect(jsonPostAPIResponse.booking.bookingdates.checkin).toBe("2018-01-01");
expect(jsonPostAPIResponse.booking.bookingdates.checkout).toBe("2019-01-01");
});

test('create POST API request using dynamic data 2' , async ({ request}) => {
   //Reading json file
    const filePath=path.join(__dirname,'../test-data/api_requests/Dynamic_API_Request.json'); 
    const requestTemplate = fs.readFileSync(filePath, 'utf-8');
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int({ min: 1000, max: 10000 });
    const additionalNeeds = faker.science.chemicalElement().name;
    const values = [firstName, lastName, totalPrice, additionalNeeds];
    //updateing post API request body with dynamic data
    const postAPIRequestData = await formatAPIRequest(requestTemplate, values);    
    // Make a POST API request
 const postAPIResponse = await request.post('/booking',{data: JSON.parse(postAPIRequestData)}); 
 // Print API response
 const jsonPostAPIResponse=await postAPIResponse.json();
console.log('PostAPIResponse :'+JSON.stringify(jsonPostAPIResponse,null,2));
//Validate API response
expect(postAPIResponse.status()).toBe(200);
expect(postAPIResponse.statusText()).toBe('OK');
expect(postAPIResponse.headers()['content-type']).toContain('application/json');

//Validate key value from API response
expect(jsonPostAPIResponse.booking).toHaveProperty('firstname');
expect(jsonPostAPIResponse.booking).toHaveProperty('lastname');

expect(jsonPostAPIResponse.booking.bookingdates).toHaveProperty('checkin');
expect(jsonPostAPIResponse.booking.bookingdates).toHaveProperty('checkout');

//VadlidateAPI response body
expect(jsonPostAPIResponse.bookingid).toBeGreaterThan(0);
expect(jsonPostAPIResponse.booking.firstname).toBe(firstName);
expect(jsonPostAPIResponse.booking.lastname).toBe(lastName);
expect(jsonPostAPIResponse.booking.totalprice).toBe(totalPrice);
expect(jsonPostAPIResponse.booking.additionalneeds).toBe(additionalNeeds);
expect(jsonPostAPIResponse.booking.bookingdates.checkin).toBe("2018-01-01");
expect(jsonPostAPIResponse.booking.bookingdates.checkout).toBe("2019-01-01");
});