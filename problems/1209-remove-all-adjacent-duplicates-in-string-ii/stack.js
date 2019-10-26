/**
 * stack
 * 
 * 时间：O(NK), 2716ms
 */
var removeDuplicates = function(s, K) {
  const stack = new Stack()
  for (let i = 0; i < s.length; ++i) {
    stack.push(s[i])
    if (stack.size() >= K) {
      // 检测栈顶K个是否相等
      let same = true
      for (let j = 2; j <= K; ++j) {
        if (stack.top(j) !== stack.top(j - 1)) {
          same = false
          break
        }
      }
      if (same) {
        for (let j = 0; j < K; ++j) {
          stack.pop()
        }
      }
    }
  }

  const res = []
  while (!stack.empty()) res.push(stack.pop())
  return res.reverse().join('')
};

class Stack {
  constructor (arr = []) {
    this.arr = arr
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

  top (n = 1) {
    return this.arr[this.arr.length - n]
  }
}
