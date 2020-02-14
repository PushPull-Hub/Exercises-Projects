let _ = require('lodash')

function toKebabCase(string) {
  let str
  str = _.kebabCase(string)
  return str
}
console.log(toKebabCase("today HERE I'm ...."))
