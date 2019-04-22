/**
 * Stack解法：O(N)
 */
var dailyTemperatures = function(arr) {
  let stack = new Stack()
  let result = Array.from({ length: arr.length }, () => 0) // 默认为0
  for (let i = 0; i < arr.length; ++i) {
    while (!stack.empty() && arr[stack.top()] < arr[i]) {
      let last = stack.pop()
      result[last] = i - last
    }
    stack.push(i)
  }
  return result
};

class Stack {
  constructor () {
    this.arr = []
  }

  empty () {
    return this.arr.length === 0
  }

  push (newElement) {
    this.arr.push(newElement)
  }

  pop () {
    return this.arr.pop()
  }

  top () {
    return this.arr[this.arr.length - 1]
  }
}
