/**
 * 我一开始写的很粗糙的stack法
 */
var decodeString = function(s) {
  const stack = new Stack
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === ']') {
      // 取出括号中的字符串
      let str = ''
      while (stack.top() !== '[') {
        const ch = stack.pop()
        str = ch + str
      }

      // 取出`[`
      stack.pop()

      // 取出数字
      let count = 0
      let base = 1
      while (!stack.empty() && isNumber(stack.top())) {
        const n = Number(stack.pop())
        count += base * n
        base *= 10
      }

      // 计算后，再次推进stack
      let tmpResult = str.repeat(count)
      for (let j = 0; j < tmpResult.length; ++j) {
        stack.push(tmpResult[j])
      }
    } else {
      stack.push(s[i])
    }
  }

  let res = ''
  while (!stack.empty()) {
    res += stack.pop()
  }
  return Array.from(res).reverse().join('')
};

function isNumber (ch) {
  return /^\d$/.test(ch)
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
