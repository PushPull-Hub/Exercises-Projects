// console.table()
// Brainfuck
//
//
//
//
//
//
//
//

// let user = {
//   name: `Hamza`,
//   age: `22`,
//   city: `Turin`,
//   "likes birds": true,
//   isAdmin: true
//     calss: `george`
// };
// delete user.calss;
// user.name = "Pete";
// console.log([user.calss]);
//   let key = prompt(`what do you want to know ??`);
//   alert(user[key])

// let user = {
//   name: `Hamza`,
//   age: `22`,
//   city: `Turin`,
//   "likes birds": true,
//   isAdmin: true
// };

// console.log("like birds" in user);
// console.log("likes birds" in user);

// let user = {
//     name: `Hamza`,
//     age: `22`,
//     city: `Turin`,
//     "likes birds": true,
//     isAdmin: true,
//     calss: `george`,
//     money: undefined
//   };
// console.log(user.money);
// console.log("money" in user);

// let user = {
//   name: `Hamza`,
//   age: `22`,
//   city: `Turin`,
//   "likes birds": true,
//   isAdmin: true,
//   calss: `george`,
//   money: undefined
// };

// for (let secondUser in user) {
//   console.log(secondUser);
// }
// clone
// let user = {
//   name: `Hamza`,
//   age: `22`,
//   city: `Turin`,
//   "likes birds": true,
//   isAdmin: true,
//   calss: `george`,
//   money: undefined
// };

// let clone = {};

// for (let copy in user) {
//   clone[copy] = user[copy];
// }
// console.log(clone.age);

// let user = {
//   name: `Hamza`,
//   age: `22`,
//   city: `Turin`,
//   "likes birds": true,
//   isAdmin: true,
//   calss: `george`,
//   money: undefined
// };

let salaries = {
  John: 100,
  Mary: 150,
  alinson: 200
};

function SumSalaries(object) {
  sum = 0;
  for (let key in salaries) {
    salaries = object[key];
    sum = sum + salaries;
  }
}

console.log(SumSalaries(salaries));
