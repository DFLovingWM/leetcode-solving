/**
 * 栈：栈顶匹配
 * 
 * 时间：`O(N)`
 */
var asteroidCollision = function (arr) {
  const stack = new Stack()

  for (let i = 0; i < arr.length; ++i) {
    if (!stack.empty() && stack.top() > 0 && arr[i] < 0) { // 碰撞
      const [a, b] = [Math.abs(stack.top()), Math.abs(arr[i])]
      if (a === b) {
        stack.pop()
      } else if (a < b) {
        stack.pop()
        --i
      }
    } else {
      stack.push(arr[i])
    }
  }

  let res = []
  while (!stack.empty()) {
    res.push(stack.pop())
  }
  return res.reverse()
};

// 栈
class Stack {
  constructor () {
    this.arr = []
  }

  empty () {
    return this.arr.length === 0
  }

  top () {
    return this.arr[this.arr.length - 1]
  }

  push (x) {
    this.arr.push(x)
  }

  pop () {
    return this.arr.pop()
  }
}

module.exports = asteroidCollision