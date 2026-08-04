test ('Get user data', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts/5');
    
    console.log('status code:', response.status());
    
    const body = await response.json();
    
    console.log('response body:', body);
    
    expect (response.status()).toBe(200);
    
    expect (body.id).toBe(5);
    
})