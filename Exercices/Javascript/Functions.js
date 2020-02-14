//    Patren A
//    1
//    22
//    333
//    4444

function printNumber(number) {
  let line = ``

  for (i = 0; i < number; i++) {
    line = line + number.toString()
  }
  return line
}

function secondRow(number, rows) {
  let line = ''
  for (j = 0; j < rows; j++) {
    let nextNumber = number + 1
    line = line + printNumber(number) + `\n` + printNumber(nextNumber)
  }
  return line
}

//  console.log( secondRow ( 6 , 3) )

//  Patren B
//  1
//  22
//  333
//  4444
//  55555

function printNumber(number) {
  let line = ''
  for (let i = 0; i < number; i++) {
    line = line + String(number)
  }
  return line
}

function printRow(number, numberRow) {
  let j = 0
  let row = ''
  while (j < numberRow) {
    row = row + printNumber(number) + '\n'
    number++
    j++
  }
  return row
}

// console.log(printRow(1 , 5))

//  Patern C :
//  1
//  12
//  123
//  1234
//  12345

function printTheShape(number, rows) {
  let line = ''
  for (j = 1; j <= rows; j++) {
    let i = 0
    n = number
    while (i < j) {
      line = line + String(n++)
      i++
    }
    line += `\n`
  }
  return line
}

//   Patern D
//      *
//     ***
//   *******
//  *********

function buildTriangle(rows) {
  let nSpace = rows
  let asterisk = '*'
  for (let i = 0; i < rows; i++) {
    nSpace = nSpace - 1
    let space = makeSpaces(nSpace)
    console.log(space + asterisk)
    asterisk += '**'
  }
}

function makeSpaces(n) {
  let s = ''
  for (let i = 0; i < n; i++) s += ' '
  return s
}
// buildTriangle(4)

//  patern E
//     1
//    123
//   12345
//  1234567

function buildTriangle(rows) {
  let nSpace = rows

  for (let i = 0; i < rows; i++) {
    nSpace = nSpace - 1
    let space = makeSpaces(nSpace)
    console.log(space + lineCaracter(i * 2 - 1))
  }
}

function makeSpaces(n) {
  let s = ''
  for (let i = 0; i < n; i++) s += ' '
  return s
}

function lineCaracter(caracter) {
  let line = ''
  for (i = 0; i < caracter; i++) {
    line = line + String(i + 1)
  }
  return line
}

// console.log(buildTriangle(6))

//   Patern D  (2nd way )
//      *
//     ***
//   *******
//  *********

function makeAsteriks(asteriks) {
  let line = ''
  for (let i = 0; i < asteriks; i++) {
    line = line + '*'
  }
  return line
}

function makeLine(asteriks, space) {
  let line = ''
  let numCaracter = asteriks + space
  for (let i = 0; i < numCaracter; i++) {
    line =
      makeSpace((numCaracter - asteriks) / 2) +
      makeAsteriks(asteriks) +
      makeSpace((numCaracter - asteriks) / 2)
  }
  return line
}

function makeSpace(space) {
  let line = ''
  for (j = 0; j < space; j++) {
    line = line + ' '
  }
  return line
}

// console.log(makeLine(2,6))

//  rubbish and failed tries
//  this are a filed tries

console.log(printTheShape(5, 5))
function makeSpace() {}

function buildTriangle(rows) {
  let space = makeSpace(rows - 1)
  let asteriks = '*'
  for (i = 0; i < rows; i++) {
    console.log(space + asteriks)
    space = space.substr(1)
    asteriks += '**'
  }
}

// console.log(buildTriangle(4))

function makeRow(numAsteriks, caracteres) {
  let space = (caracteres - numAsteriks) / 2
  let line = ``
  let asteriks = `*`
  for (i = 0; i < caracteres; i++) {
    line = line + space
  }
}

let pr = 5
