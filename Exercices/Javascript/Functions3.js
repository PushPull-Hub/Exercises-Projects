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
