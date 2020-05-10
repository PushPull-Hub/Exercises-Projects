// Exercises about Array

// Printing Element Inside The Array

function printItems() {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// console.log(printItems(arr));

function doubleNumber(arr) {
  const doubles = [];
  for (let item of arr) {
    if (typeof item === 'number') doubles.push(item * 2);
  }
  return double;
}

// console.log(doubleNumber(arr));
//console.log(arr.filter(isEven));
// console.log(arr.filter(isOdd));

function printAray(arr) {
  console.log(arr);
}
// console.log(printAray(arr));

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

// first odd number
// console.log(arr.find(isOdd));

// first Even number
// console.log(arr.find(isEven));

function doubleNumber(arr) {
  let double = [];
  for (let item of arr) {
    if (typeof item === `number`) {
      double.push(item * 2);
    }
  }
  return double;
}

let arr = [3, 12, 42, 4, 5, 7, `Hello`, `world`];

const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;
const double = (num) => num * 2;
const compare = (a, b) => (a > b ? 1 : a == b ? 0 : a - b);

function compareNum(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

// console.log(arr.sort(compare));
// console.log(arr.sort(compareNum));
