const path = require('path');

// Base File Name
console.log(path.basename(__filename)); // path_demo.js

// Directory name
console.log(path.dirname(__filename)); // /Users/Hamza/Desktop/Coding/Exercises-Projects/Exercices/Ex-Node.js/References

// File Extention
console.log(path.extname(__filename)); // .js

// Creat Path Object
console.log(path.parse(__filename)); // { root: '/', dir: '/Users/Hamza/Desktop/Coding/Exercises-Projects/Exercices/Ex-Node.js/References',base: 'path_demo.js',ext: '.js',name: 'path_demo'}

// Concatenate Paths
console.log(path.join(__dirname, 'test', 'hello.html')); // /Users/Hamza/Desktop/Coding/Exercises-Projects/Exercices/Ex-Node.js/References/test/hello.html
