//  stylish Ranking exercice

function stylishRanking(amounOfDamage) {
  switch (amounOfDamage) {
    case 1:
      return 'Dull !'

    case 5:
      return 'cool'

      break

    case 10:
      return 'Bravo !'

      break

    case 20:
      return 'Stylish !!'
      break
  }
}

console.log(stylishRanking(5))

// ******
// *    *
// *    *
// ******
// 1. how to build a 'full' row
// 2. how to build an 'empty' row
// 3. how to build the whole button, knowing that:
//    1. the first and last rows are always 'full'
//    2. all other rows in between are always 'empty'

//Solution

function fullRow(columns) {
  let row = ``
  for (i = 0; i < columns; i++) {
    row = row + `*`
  }
  return row
}

function emptyRow(columns) {
  let row = `*`
  for (i = 0; i < columns - 2; i++) {
    row = row + ` `
  }
  return row + '*\n'
}

console.log(fullRow(8) + '\n' + emptyRow(8) + emptyRow(8) + fullRow(8))

//   *
//  ***
// *****
//********

function spaces(volte) {
  let row = ``
  for (i = 0; i < volte; i++) {
    row = row + ` `
  }
  return row
}

function astrows(volte) {
  let row = ``
  for (i = 0; i < volte; i++) {
    row = row + `*`
  }
  return row
}

console.log(
  spaces(3) +
    astrows(1) +
    spaces(3) +
    `\n` +
    spaces(2) +
    astrows(3) +
    spaces(2) +
    `\n` +
    spaces(1) +
    astrows(6) +
    spaces(1) +
    `\n` +
    astrows(8)
)

function buildRow(columns) {
  let row = ``
  for (let i = 0; i < columns; i++) {
    row = row + `*`
  }
  return row
}

function buildRectangle(columns, buttom) {
  let line = ``
  for (let i = 0; i < buttom; i++) {
    line = line + buildRow(columns) + '\n'
  }
  return line
}
console.log(buildRectangle(5, 3))
