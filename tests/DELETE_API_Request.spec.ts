import { test, expect } from '@playwright/test';

import { getPOSTAPIRequestBody } from '../src/utils/APIHelper';

import { faker } from '@faker-js/faker';

import tokenAPIRequest from '../test-data/api_requests/Token_API_Request.json';
import putAPIRequestData from '../test-data/api_requests/PUT_API_Request.json';
import patchAPIRequestData from '../test-data/api_requests/PATCH_API_Request.json';

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('[10,11] create  DELETE API request using playwright & typescript', { tag: ['@playwrightWithJenkins', '@playwrightWithGitHubActions'] }, async ({ request }) => {

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int({ min: 1000, max: 10000 });
    const additionalNeeds = faker.science.chemicalElement().name;
    const values = [firstName, lastName, totalPrice, additionalNeeds];

    const postAPIRequest = await getPOSTAPIRequestBody(firstName, lastName, totalPrice, true, additionalNeeds, "2018-01-01", "2019-01-01")

    // Make a POST API request
    const postAPIResponse = await request.post('/booking', { data: postAPIRequest });
    // Print API response
    const jsonPostAPIResponse = await postAPIResponse.json();
    console.log('PostAPIResponse :' + JSON.stringify(jsonPostAPIResponse, null, 2));
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

    //GET API request
    const bookingId = jsonPostAPIResponse.bookingid;
    console.log('Booking ID :' + bookingId);

    const getAPIResponse = await request.get(`/booking/${bookingId}`);
    const jsonGetAPIResponse = await getAPIResponse.json();
    console.log('GetAPIResponse :' + JSON.stringify(jsonGetAPIResponse, null, 2));

    //Validate GET API response
    // Validate API response status and headers
    expect(getAPIResponse.status()).toBe(200);
    expect(getAPIResponse.statusText()).toBe('OK');
    expect(getAPIResponse.headers()['content-type']).toContain('application/json');

    // Tokengeneration for PUT API request
    const tokenAPIResponse = await request.post('/auth', { data: tokenAPIRequest });
    const jsonTokenAPIResponse = await tokenAPIResponse.json();
    //validate token API response
    expect(tokenAPIResponse.status()).toBe(200);
    expect(tokenAPIResponse.statusText()).toBe('OK');
    expect(tokenAPIResponse.headers()['content-type']).toContain('application/json');
    const token = jsonTokenAPIResponse.token;
    console.log('Token :' + token);

    //create Patch API request body
    const patchAPResponse = await request.patch(`/booking/${bookingId}`, {
        data: patchAPIRequestData,
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `token=${token}`
        }
    });

    //validate PATCH API response
    expect(patchAPResponse.status()).toBe(200);
    expect(patchAPResponse.statusText()).toBe('OK');
    expect(patchAPResponse.headers()['content-type']).toContain('application/json');
    const jsonPatchAPIResponse = await patchAPResponse.json();
    console.log('PatchAPIResponse :' + JSON.stringify(jsonPatchAPIResponse, null, 2));

    //create DELETE API request
    const deleteAPIResponse = await request.delete(`/booking/${bookingId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `token=${token}`
        }

    });

    //validate DELETE API response
    expect(deleteAPIResponse.status()).toBe(201);
    expect(deleteAPIResponse.statusText()).toBe('Created');
    expect(deleteAPIResponse.headers()['content-type']).toContain('text/plain; charset=utf-8');
    const jsonDeleteAPIResponse = await deleteAPIResponse.body();
    console.log('DeleteAPIResponse :' + jsonDeleteAPIResponse);
});