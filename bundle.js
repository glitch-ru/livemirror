const url = 'https://bit.ly';
const to = location.pathname;
const params = location.search;
const hash = location.hash;
const redirect = url + to + params + hash;
location.replace(redirect);
