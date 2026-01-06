const url = 'https://bit.ly';
const path = location.pathname;
const params = location.search;
const hash = location.hash;
const redirect = url + path + params + hash;
location.replace(redirect);
