/**
 * @param {string} exp
 * @return {number}
 */
var calculate = function(exp) {
  let parentOperator = '+', lastOperator = '+'
  let result = 0

  for (let i = 0; i < exp.length; ++i) {
    const char = exp[i]
    if (char === '(') { // Left
      parentOperator = i === 0 ? '+' : lastOperator
      lastOperator = '+'
    } else if ('1234567890'.includes(char)) { // Number
      let number = 0
      while (i < exp.length && '1234567890'.includes(exp[i])) {
        number = number * 10 + Number(exp[i])
        ++i
      }
      if (parentOperator === lastOperator) {
        result += number
      } else {
        result -= number
      }
      --i
    } else if (char === '+' || char === '-') {
      lastOperator = char
    }
  }

  return result
};

class Stack {
  constructor (arr = []) {
    this.arr = arr
  }

  push (element) {
    this.arr.push(element)
  }

  pop () {
    return this.arr.pop()
  }

  top () {
    return this.arr[this.arr.length - 1]
  }

  empty () {
    return this.arr.length === 0
  }
}

[
  ["(5-(1+(5)))"],
].forEach(input => {
  console.log(calculate(...input))
})