// // build shape as :
// //  1
// //  22
// //  333
// //  4444
// //  55555

// function printNumber(number) {
//   let line = ''
//   for (let i = 0; i < number; i++) {
//     line = line + String(number)
//   }
//   return line
// }

// console.log(printNumber(6))

// function printRow(number, numberRow) {
//   let j = 0
//   let row = ''
//   while (j < numberRow) {
//     row = row + printNumber(number) + '\n'
//     number++
//     j++
//   }
//   return row
// }

// console.log(printRow(1, 5))

// //  build shape as :
// //  1
// //  12
// //  123
// //  1234
// //  12345

// function printNumber(number) {
//   let line = ''
//   let i = 0
//   nextNumber = number + 1
//   while (i < number) {
//     line = line + String(number) + String(nextNumber)
//   }
//   return line
// }

// function printNextNumber(number, rows) {
//   let row = ''
//   let j = 0

//   while (j < rows) {
//     row = row + printNumber(number) + '\n'
//   }
// }

// console.log(printNumber(5))
// let x = 0

let sum = (a, b) => a + b;
// console.log(sum(2, 3));

let multiplication = (a, b) => a * b;

// console.log(multiplication(5, 6));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let isEven = number => number % 2 === 0;

// console.log(isEven(2));

let isOdd = number => number % 2 !== 0;

// console.log(isOdd(3));

let print = input => console.log(input);
let alert = input => alert(input);

// print(isEven(2));

let numbersFilter = input =>
  typeof input === 'number'
    ? (message = input)
    : (message = "input isn't a number");

// print(numbersFilter('number'));

let testUserName = name =>
  name === 'Robert' || name === 'Admin'
    ? (message = "Yeah You're The User")
    : (message = "Sorry You're Not The User");

// print(testUserName('Robert'));
