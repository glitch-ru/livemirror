const url = 'https://bit.ly'
let to = new URLSearchParams(location.search).get('to');
if (to) {
  if (!to.startsWith('/')) { to = '/' + to; }
} else { to = ''; }
const redirect = url + to;
location.replace(redirect);
