/**
 * stack的“标准”解法
 */
var decodeString = function(s) {
  const intStack = new Stack()
  const strStack = new Stack()
  let res = ''
  let count = 0

  for (const ch of s) {
    if (isNumber(ch)) { // 数字
      count = count * 10 + Number(ch)
    } else if (isLetter(ch)) { // 字母
      res += ch
    } else if (ch === '[') { // 左括号：暂存中间结果
      strStack.push(res)
      intStack.push(count)
      count = 0
      res = ''
    } else if (ch === ']') { // 右括号
      let tmp = strStack.pop()
      let repeatTimes = intStack.pop()
      while (repeatTimes--) tmp += res
      res = tmp
    }
  }

  return res
};

function isNumber (ch) {
  return /^\d$/.test(ch)
}

function isLetter (ch) {
  return /^[a-zA-Z]$/.test(ch)
}

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
}
