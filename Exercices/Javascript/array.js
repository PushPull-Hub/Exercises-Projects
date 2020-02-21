// Exercises about Array

// Printing Element Inside The Array

// function printItems() {
//     for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
//     }
//   }
// console.log(printItems(arr));

// function doubleNumber(arr) {
//   const doubles = [];
//   for (let item of arr) {
//     if (typeof item === 'number') doubles.push(item * 2);
//   }
//   return double

// }

// console.log(doubleNumber(arr));

//console.log(arr.filter(isEven));

// console.log(arr.filter(isOdd));

let arr = [1, 2, 3, 4, 5, 6, 7, `Hello`, `world`];

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

// console.log(doubleNumber(arr));
