const url = require('url');

const myUrl = new URL(
  'https://mywebsite.com:8000/hello.html?id=100&status=active',
);

// Serialized Url
console.log(myUrl.href);
console.log(myUrl.toString());

// // Host (root domain)
console.log(myUrl.host);
// // .hostname (do not show the Port)
console.log(myUrl.hostname);

// // Path name
console.log(myUrl.pathname);

// // Serialized Query
console.log(myUrl.search);

// // parameters object
console.log(myUrl.searchParams);

// Add a parameter
myUrl.searchParams.append('addedParam', '123');
console.log(myUrl.searchParams);

// Loop trough the params
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}:${value}`);
});
