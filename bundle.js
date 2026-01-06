const url = 'https://bit.ly';
const path = '/' + (new URLSearchParams(location.search).get('p') || '').replace(/^\/+/, '');
const params = location.search;
const hash = location.hash;
const redirect = url + path + params + hash;
location.replace(redirect);
