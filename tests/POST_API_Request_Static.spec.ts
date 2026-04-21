import { test, expect } from '@playwright/test';

import postAPIRequestData from '../test-data/api_requests/POST_API_Request.json';

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('POST API request', async ({ request}) => {
    // Make a POST API request
 const postAPIResponse = await request.post('/booking',{data: postAPIRequestData}); 
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
expect(jsonPostAPIResponse.booking.firstname).toBe(postAPIRequestData.firstname);
expect(jsonPostAPIResponse.booking.lastname).toBe(postAPIRequestData.lastname);
expect(jsonPostAPIResponse.booking.bookingdates.checkin).toBe("2018-01-01");
expect(jsonPostAPIResponse.booking.bookingdates.checkout).toBe("2019-01-01");
});