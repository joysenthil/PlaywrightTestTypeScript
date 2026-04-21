import { test, expect } from '@playwright/test';

import {  getPOSTAPIRequestBody } from '../src/utils/APIHelper';

import {faker} from '@faker-js/faker';

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('create POST API request using dynamic data with type safety' , async ({ request}) => {
   
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int({ min: 1000, max: 10000 });
    const additionalNeeds = faker.science.chemicalElement().name;
    const values = [firstName, lastName, totalPrice, additionalNeeds];
    
    const postAPIRequest=await getPOSTAPIRequestBody(firstName, lastName, totalPrice, true, additionalNeeds, "2018-01-01", "2019-01-01")

    // Make a POST API request
 const postAPIResponse = await request.post('/booking',{data: postAPIRequest}); 
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