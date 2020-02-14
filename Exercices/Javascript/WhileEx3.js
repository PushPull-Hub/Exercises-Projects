//       class Students

const classPosts = 20;
let student = 0;
let letter = "s";
while (student < classPosts && classPosts - student != 1) {
  console.log(
    `we still miss ${classPosts - student} student${letter} to start the class `
  );
  student = student + 1;
}
console.log(
  `we still miss ${classPosts - student} student to start the class `
);

// numbers devided by 20

let i = 100;
while (i > 0) {
  let isDivivsible = i % 20 === 0;
  if (isDivivsible) {
    console.log(i);
  }
  i = i - 1;
}

// numbers *2

let i = 0;
while (i <= 100) {
  console.log(i);
  i = i + 2;
}

// odd numbers

let i = 1;
while (i < 100) {
  console.log(i);
  i = i + 2;
}

// multiplicatio of 7

let i = 1;

while (i < 20) {
  console.log(i * 7);
  i = i + 1;

  //  row *******

  /* let sp=" "   

let astrow="*"
let rep=0

while(rep<10){
    console.log(astrow);
    rep=rep+1
}

let str = "********"
for ( let i = 0; i<3 ; i++){
     str+"\n"
}
console.log (str)   

let astrows="********"
let i=0



let repV=0
let str=""
let repH =0

 while() {
   if( repV<10 ){ 
       str= str+"*"
       console.log(str)
       }
    else  console.log("\n") ; +1
} */

  let i = 0;
  let str = "";
  let j = 0;
  while (j < 4) {
    while (i < 10) {
      str = str + "*";
      i = i + 1;
    }

    i = 0;
    str = str + "\n";
    j = j + 1;
  }
  console.log(str);

  //  prime numbers

  //  cards

  let card = "A";
  let value;

  switch (card) {
    case "A":
      value = 1;
      break;

    case "J":
      value = 11;
      break;

    case "K":
      value = 13;
      break;

    case "Q":
      value = 12;
      break;

    default:
      value = Number(card);
  }
  console.log(value);

  function buildRow(columns) {
    let row = "";
    for (let i = 0; i < columns; i++) {
      row = row + `*`;
    }
    return row;
  }

  function buildButton(rows, button) {
    for (i = 0; i < buildButton; i++) {}
  }

  // let row=buildRow(5)
  console.log(row);
}
