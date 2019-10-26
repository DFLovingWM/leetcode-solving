/**
 * Stack approach, like [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
 * O(N), [76ms]
 */
var isValid = function(string) {
  let stack = new Stack()

  for (const char of string) {
    if (char === 'a') {
      stack.push(char)
    } else if (char === 'b') {
      if (stack.top() !== 'a') return false
      stack.push(char)
    } else {
      if (stack.top() !== 'b' || stack.top(2) !== 'a') return false
      stack.pop()
      stack.pop()
    }
  }

  return stack.empty()
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
  'aabcbc',
  'abcabcababcc',
  'abccba',
  'cababc',
  'aaaaaaaaa'
].forEach(input => {
  console.log(isValid(input))
})