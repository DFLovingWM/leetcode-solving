/**
 * 类似于84的单调栈解法：
 * 每一行作为柱形图的底部，往上累加就是柱子高度
 * 
 * 时间：O(RC), 128ms
 */
var maximalRectangle = function (matrix) {
  const R = matrix.length
  if (R === 0) return 0
  const C = matrix[0].length
  
  const heights = Array.from({ length: C }, () => 0)
  let res = 0

  for (let i = 0; i < R; ++i) { // 每一行

    // 解析这一行的柱状图
    for (let j = 0; j < C; ++j) {
      if (matrix[i][j] === '0') {
        heights[j] = 0
      } else {
        ++heights[j]
      }
    }

    // 然后扔进84的题解，求出最大矩形面积
    res = Math.max(res, leetcode84(heights))
  }
  
  return res
};

function leetcode84 (heights) {
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