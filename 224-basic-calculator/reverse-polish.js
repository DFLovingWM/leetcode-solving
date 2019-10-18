const PRIORITY = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2
}

/**
 * 逆波兰表达式
 * 时间：160ms
 */
var calculate = function (s) {
  return evalRPN(toRPN(s))
};

// 转化为逆波兰表达式
function toRPN (text) {
  text = text.replace(/\s/g, '') // 去除空格

  const res = new Stack() // 结果
  const op = new Stack() // 符号(临时)

  for (let i = 0; i < text.length; ++i) {
    if (isNumber(text[i])) { // 数字
      let n = 0
      let j
      for (j = i; j < text.length && isNumber(text[j]); ++j) {
        n = n * 10 + Number(text[j])
      }
      res.push(n)
      i = j - 1
    } else if (isOperator(text[i])) { // 加减乘除
      // 将优先级大于等于该运算符的转移到res中(先算)
      while (!op.empty() && PRIORITY[op.top()] >= PRIORITY[text[i]]) {
        res.push(op.pop())
      }
      op.push(text[i])
    } else if (text[i] === '(') { // `(`
      // 直接加入符号集，只作为右括号的镇静剂
      op.push(text[i])
    } else if (text[i] === ')') { // `)`
      // 寻找`(`的过程中，将符号转移到res中(括号内先算)
      while (!op.empty() && op.top() !== '(') {
        res.push(op.pop())
      }
      // 将`(`舍弃
      op.pop()
    }
  }

  // 将剩余的符号转移到res中
  while (!op.empty()) {
    res.push(op.pop())
  }

  let resArr = []
  while (!res.empty()) {
    resArr.push(res.pop())
  }
  resArr.reverse()

  return resArr
}

// 逆波兰表达式求值
var evalRPN = function (tokens) {
  const stack = new Stack()

  for (const ch of tokens) {
    if (isOperator(ch)) {
      const b = stack.pop()
      const a = stack.pop()
      const result = evaluate(a, b, ch)
      stack.push(result)
    } else {
      stack.push(ch)
    }
  }

  return stack.pop()
};

function isNumber (ch) {
  return /^[0-9]$/.test(ch)
}

function isOperator (ch) {
  return /^[\+\-\*\/]$/.test(ch)
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

// 栈
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

module.exports = calculate