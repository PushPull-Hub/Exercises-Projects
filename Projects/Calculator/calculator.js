//
//

// function collectData(inputnumber) {
//   let num = ``;
//   for (i = 0; i < 1; i++) {
//     num = ` ${num}` + `${inputnumber}`;
//   }
//   return num;
// }
// console.log(collectData(11));

function insertNum(num) {
  document.getElementById('input').value =
    document.getElementById('input').value + `${num}`;
}

function storeValue1() {
  return parseInt(document.getElementById('input').value);
}
function clearInput() {
  return (document.getElementById('input').value = ``);
}

function sum(a, b) {
  let st = parseInt(a);
  let nd = parseInt(b);
  return st + nd;
}

// function sumValues() {
//   let val2 = document.getElementById('input').value;
//   let sump = sum(storeValue1(), val2);
//   return (document.getElementById(
//     'p',
//   ).innerHTML = `The Result is <span class="item animated fadeInDown"> ${sump} </span>`);
// }

function sumValues() {
  let val = parseint(document.getElementById('input').value);
  let sdVal = parseint(document.getElementById('input').value);

  let sum = sum(val + sdVal);
  return (document.getElementById(
    'p',
  ).innerHTML = `The Result is <span class="item animated fadeInDown"> ${sump} </span>`);
}
