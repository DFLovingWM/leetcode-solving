/**
 * 逆波兰表达式求值，使用stack
 */
var evalRPN = function (tokens) {
  const stack = new Stack()

  for (const ch of tokens) {
    if (isOperator(ch)) {
      const b = stack.pop()
      const a = stack.pop()
      const result = evaluate(a, b, ch)
      stack.push(result)
    } else {
      stack.push(Number(ch))
    }
  }

  return stack.pop()
};

function isOperator (ch) {
  return ch.length === 1 && '+-*/'.includes(ch)
}

function evaluate (a, b, operator) {
  let res
  switch (operator) {
    case '+':
      res = a + b
      break
    case '-':
      res = a - b
      break
    case '*':
      res = a * b
      break
    case '/':
      res = a / b
      // 如果结果是小数，需要根据正负来决定是向上还是向下取整
      if (res >= 0) {
        res = Math.floor(res)
      } else {
        res = Math.ceil(res)
      }
      break
    default:
      break
  }
  return res
}

class Stack {
  constructor () {
    this.arr = []
  }

  top () {
    return this.arr[this.arr.length - 1]
  }

  pop () {
    return this.arr.pop()
  }

  push (x) {
    this.arr.push(x)
  }

  empty () {
    return this.arr.length === 0
  }
}


module.exports = evalRPN