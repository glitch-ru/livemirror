const url = 'https://bit.ly'
let to = location.pathname.slice(1);
const redirect = url + to;
location.replace(redirect);
