/**
 * 找到最大深度，然后摘除最外层的两个括号
 */
var maxDepthAfterSplit = function(seq) {
  const stack = new Stack()

  let maxDepth = 0, L, R

  for (let i = 0; i < seq.length; ++i) {
    if (seq[i] === '(') {
      stack.push(i) // 记录下标
      if (stack.size() > maxDepth) {
        maxDepth = stack.size()
        
      }
    } else if (seq[i] === ')') {
      ++depth
    }
  }
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

  size () {
    return this.arr.length
  }
}

[

]