/**
 * 循环数组解决方式：
 * - 数组 * 2
 * - 循环 * 2(更简单点)
 */
var nextGreaterElements = function(arr) {
  let L = arr.length, L2 = L * 2
  let stack = new Stack()
  let result = Array.from({ length: L }, () => -1)

  for (let i = 0; i < L2; ++i) {
    let i2 = i % L
    while (!stack.empty() && arr[stack.top()] < arr[i2]) {
      result[stack.pop()] = arr[i2]
    }
    stack.push(i2)
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

[
  [[1,2,1]],
  [[1,2,3,4,5]],
].forEach(input => {
  console.log(nextGreaterElements(...input))
})