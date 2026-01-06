const url = 'https://bit.ly';
const to = location.pathname.slice(11);
const params = location.search;
const hash = location.hash;
const redirect = url + to + params + hash;
location.replace(redirect);
