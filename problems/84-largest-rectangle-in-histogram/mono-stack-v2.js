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
