/**
 * 检查所有子串
 * 
 * 时间：O(N^3)
 */
var longestValidParentheses = function (text) {
  const dp = [0]
  for (let len = text.length; len >= 0; --len) {
    for (let start = 0; start + len - 1 < text.length; ++start) {
      const end = start + len - 1
      const subString = text.slice(start, end + 1)
      if (isValid(subString)) {
        return subString
      }
    }
  }
};

function isValid (S) {
  const stack = new Stack()
  for (let i = 0; i < S.length; ++i) {
    if (S[i] === '(') {
      stack.push(S[i])
    } else if (S[i] === ')') {
      if (stack.top() !== '(') return false
      stack.pop()
    }
  }
  return stack.empty()
}

class Stack {
  constructor () {
    this.arr = []
  }

  push (x) {
    this.arr.push(x)
  }

  pop () {
    return this.arr.pop()
  }

  empty () {
    return this.arr.length === 0
  }

  size () {
    return this.arr.length
  }

  top () {
    return this.arr[this.arr.length - 1]
  }
}

module.exports = longestValidParentheses