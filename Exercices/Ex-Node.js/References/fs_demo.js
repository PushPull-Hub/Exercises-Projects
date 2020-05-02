const fs = require('fs');
const path = require('path');

// Creat Folder

fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
  if (err) throw err;
  console.log('Folder Created ...');
});

//Creat a File and write in it

fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'Hello World !!',
  (err) => {
    if (err) throw err;
    console.log('File has been Created and Text writen init ');
  },
);

// Creat a file , write in it , and append in it
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'Hello World!!',
  (err) => {
    if (err) throw err;
    console.log('File writen to .. ');
    fs.appendFile(
      path.join(__dirname, 'test', 'hello.txt'),
      "this is the text I added (I'm Learning Node.Js)",
      (err) => {
        if (err) throw err;
      },
    );
  },
);

// Read a File

fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename a File

fs.rename(
  path.join(__dirname, 'test', 'hello.txt'),
  path.join(__dirname, 'test', 'hello-world.txt'),
  (err) => {
    if (err) throw err;
    console.log('File renamed ...');
  },
);
