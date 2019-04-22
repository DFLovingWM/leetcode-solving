/**
 * stack法
 * 其实不需要stack也可以。。。
 */
var removeOuterParentheses = function(S) {
  const stack = new Stack()
  let result = ''
  for (let i = 0; i < S.length; ++i) {
    const char = S[i]
    if (stack.empty()) {
      stack.push(char)
    } else if (char === '(') {
      result += char
      stack.push(char)
    } else if (char === ')') {
      stack.pop()
      if (!stack.empty()) {
        result += char
      }
    }
  }
  return result
};

class Stack {
  constructor (arr = []) {
    this.arr = arr
  }

  top (n = 1) {
    return this.arr[this.arr.length - n]
  }

  pop () {
    return this.arr.pop()
  }

  push (element) {
    this.arr.push(element)
  }

  empty () {
    return this.arr.length === 0
  }
}

[
  "(()())(())",
  "(()())(())(()(()))",
  "()()",
].forEach(string => {
  console.log(removeOuterParentheses(string))
})