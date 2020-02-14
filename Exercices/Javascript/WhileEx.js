let answer = prompt('insert a number greater than 100 ...')

//  answer1==null
// if (answer1==null) {
// alert("You've cancelled ")

while (answer < 100) {
  alert('that was less than 100')
  answer2 = prompt('try again')
  break
}

if (answer > 100) {
  alert('Nice shoot')
}
answer = prompt('Try Again !!')
while (answer > 100) {
  alert('Nice shoot ')
  break
}
