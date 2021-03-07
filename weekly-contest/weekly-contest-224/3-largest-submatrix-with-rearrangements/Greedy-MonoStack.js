/**
 * 贪心 + 单调栈
 * 
 * 时间：O(R * C * logC), 332ms
 */
var largestSubmatrix = function(matrix) {
  const [R, C] = [matrix.length, matrix[0].length];
  const heights = Array.from({ length: C }, () => 0);
  let res = 0;

  for (let r = 0; r < R; ++r) {
    // 构造以这一行为底的 heights
    for (let c = 0; c < C; ++c) {
      if (matrix[r][c] === 0) {
        heights[c] = 0;
      } else {
        ++heights[c];
      }
    }

    // 贪心：排序，为了让相似的柱形连在一起，尽可能创造最大的矩形
    const sortedHeights = heights.slice().sort((a, b) => a - b);

    // 单调栈求解 heights
    const area = largestRectangleArea(sortedHeights);
    res = Math.max(res, area);
  }

  return res;
};

// 以下为 85 题解

class Stack {
  constructor() {
    this.arr = [];
  }

  empty() {
    return this.arr.length === 0;
  }

  push(val) {
    this.arr.push(val);
  }

  pop() {
    return this.arr.pop();
  }

  top() {
    return this.arr[this.arr.length - 1];
  }
}

/**
 * 单调栈：一次循环，同时求双向smaller
 */
var largestRectangleArea = function(heights) {
  const n = heights.length;

  const left = Array.from({ length: n }, () => -1);
  const right = Array.from({ length: n }, () => n);
  const s = new Stack();
  for (let i = 0; i < n; ++i) {
    while (!s.empty() && heights[s.top()] >= heights[i]) {
      right[s.top()] = i; // 2
      s.pop();
    }
    if (!s.empty()) {
      left[i] = s.top();
    }
    s.push(i);
  }

  let res = 0;
  for (let i = 0; i < n; ++i) {
    const area = heights[i] * (right[i] - left[i] - 1); // 面积
    res = Math.max(area, res);
  }

  return res;
};
