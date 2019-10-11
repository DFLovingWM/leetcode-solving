/**
 * 实际上是个【Next Smaller】问题，使用单调栈
 * 
 * 时间：O(N), 92ms
 */
var largestRectangleArea = function (heights) {
  const n = heights.length
  let stack

  stack = new Stack()
  const right = Array.from({ length: n }, () => n) // 右边的Next Smaller的下标
  for (let i = n - 1; i >= 0; --i) {
    while (!stack.empty() && heights[stack.top()] >= heights[i]) {
      stack.pop()
    }
    if (!stack.empty()) {
      right[i] = stack.top()
    } else {
      right[i] = n
    }
    stack.push(i)
  }

  stack = new Stack()
  const left = Array.from({ length: n }, () => -1) // 左边的Next Smaller的下标
  for (let i = 0; i < n; ++i) {
    while (!stack.empty() && heights[stack.top()] >= heights[i]) {
      stack.pop()
    }
    if (!stack.empty()) {
      left[i] = stack.top()
    } else {
      left[i] = -1
    }
    stack.push(i)
  }

  let maxArea = 0
  for (let i = 0; i < n; ++i) {
    let area = heights[i] * ((i - left[i] - 1) + (right[i] - i - 1) + 1)
    maxArea = Math.max(maxArea, area)
  }

  return maxArea
};

// 栈
class Stack {
  constructor () {
    this.arr = []
  }

  top () {
    return this.arr[this.arr.length - 1]
  }

  pop () {
    return this.arr.pop()
  }

  push (x) {
    this.arr.push(x)
  }

  empty () {
    return this.arr.length === 0
  }
}

module.exports = largestRectangleArea