export const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Origin', 'https://www.livecoinwatch.com');
myHeaders.append('Referer', 'https://www.livecoinwatch.com/');
myHeaders.append('Accept', '/');
myHeaders.append('Sec-Fetch-Dest', 'empty');
myHeaders.append('Sec-Fetch-Mode', 'cors');
myHeaders.append('Sec-Fetch-Site', 'same-site');
myHeaders.append(
    'User-Agent',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Safari/605.1.15'
);
myHeaders.append('x-api-key', '32e581e0-c970-4f8f-8a47-7cee01b6bee4');

export const payload = {
    currency: 'USD',
    code: 'BTC',
    start: 1720090048477,
    end: 1720176448477
};
