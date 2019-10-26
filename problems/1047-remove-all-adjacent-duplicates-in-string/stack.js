/**
 * 栈：对于每个新字符，都检查top，看是否能移除
 * 
 * 时间：O(N), 104ms
 * 空间：O(N), 41.8MB
 */
var removeDuplicates = function(S) {
  const stack = new Stack()
  for (let i = 0; i < S.length; ++i) {
    if (!stack.empty() && stack.top() === S[i]) {
      stack.pop()
    } else {
      stack.push(S[i])
    }
  }
  
  const res = []
  while (!stack.empty()) res.push(stack.pop())
  return res.reverse().join('')
};

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
