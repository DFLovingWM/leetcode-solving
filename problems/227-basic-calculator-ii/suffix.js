function transfer2SuffixExp (exp) {
  // 2 stacks needed.
  let result = new Stack(),
      ops = new Stack()

  // Check every character of the expression.
  for (let i = 0; i < exp.length; ++i) {
    let char = exp[i]

    if (Char.isNumChar(char)) { // Number => combine, then push it into the result.
      let number = 0
      while (i < exp.length && Char.isNumChar(exp[i])) {
        number = number * 10 + Number(exp[i])
        ++i
      }
      --i
      result.push(number)
    } else if (char === '(') { // '(' => push it into operator stack.
      ops.push(char)
    } else if (char === ')') { // ')' => pop the oprator stack until meeting '('.
      while (ops.top() !== '(') {
        result.push(ops.pop())
      }
      ops.pop()
    } else if (Char.isOperator(char)) { // Operator => find a place that fits with it priority.
      while (!ops.empty() && Char.priority[ops.top()] >= Char.priority[char]) {
        result.push(ops.pop())
      }
      ops.push(char)
    }
  }

  // Push all the remaining operators into the result.
  while (!ops.empty())
    result.push(ops.pop())
  
  return result.toArray()
}

function evaluateSuffixExp (suffixExp) {
  let results = new Stack()

  for (let i = 0; i < suffixExp.length; ++i) {
    const item = suffixExp[i]

    if (Number.isInteger(item)) { // Number
      results.push(item)
    } else if (Char.isOperator(item)) { // Operator
      let b = results.pop()
      let a = results.pop()
      let tmpResult = calc(a, b, item)
      results.push(tmpResult)
    }
  }

  return results.top()
}

function calc (x, y, operator) {
  [x, y] = [Number(x), Number(y)]
  let result
  switch (operator) {
    case '+':
      result = x + y
      break
    case '-':
      result = x - y
      break
    case '*':
      result = x * y
      break
    case '/':
      result = Math.floor(x / y)
      break
    default:
      break
  }
  return result
}

/**
 * Char utils.
 */
let Char = {
  isNumChar (ch) {
    return ch.length === 1 && ch.charCodeAt(0) >= '0'.charCodeAt(0) && ch.charCodeAt(0) <= '9'.charCodeAt(0)
  },
  isOperator (ch) {
    return ['+', '-', '*', '/'].includes(ch)
  },
  priority: { // Priority of operators.
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '(': 0
  }
};

class Stack {
  constructor (arr = []) {
    this.arr = arr
  }

  push (n) {
    this.arr.push(n)
  }

  pop () {
    return this.arr.pop()
  }

  empty () {
    return this.arr.length === 0
  }

  top () {
    return this.arr[this.arr.length - 1]
  }

  toArray () {
    return this.arr
  }
}

class Calculator {
  static calculate (exp) {
    let suffix = transfer2SuffixExp(exp)
    return evaluateSuffixExp(suffix)
  }
}

/**
 * - Time: 112ms
 * - Space: 47.2MB
 */
function calculate (exp) {
  return Calculator.calculate(exp)
}

[
  "3+2*2",
  " 3/2 ",
  " 3+5 / 2 "
].forEach(exp => {
  console.log(calculate(exp))
})