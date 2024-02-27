import { test, expect } from '@playwright/test';

test('API GET Request', async ({ request }) => {
    const response = await request.get('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today')
    expect(response.status()).toBe(200)

    const txt = await response.text();
    console.log(await response.json())
})

test('API POST Request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users?name=aakriti&job=engg%27', {
        data: {
            "name": "aakriti",
            "job": "engg"
        }
    });
    expect(response.status()).toBe(201)  
     const txt = await response.text();       
     expect(txt).toContain('aakriti')  
    console.log(await response.json())
})     
