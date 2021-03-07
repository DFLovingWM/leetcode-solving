/**
 * NextSmaller问题，使用单调栈
 */
var largestRectangleArea = function(heights) {
  const right = rightSmaller(heights);
  const left = leftSmaller(heights);
  let res = 0;
  for (let i = 0; i < heights.length; ++i) {
    const area = heights[i] * (right[i] - left[i] - 1); // 面积
    res = Math.max(res, area);
  }
  return res;
};

function rightSmaller(heights) {
  const n = heights.length;
  const res = new Array(n);
  const s = new Stack();
  for (let i = n - 1; i >= 0; --i) { // 从右到左
    while (!s.empty() && heights[i] <= heights[s.top()]) {
      s.pop();
    }
    res[i] = !s.empty() ? s.top() : n; // 找不到，则为最右
    s.push(i);
  }
  return res;
}

function leftSmaller(heights) {
  const n = heights.length;
  const res = new Array(n);
  const s = new Stack();
  for (let i = 0; i < n; ++i) { // 反之
    while (!s.empty() && heights[i] <= heights[s.top()]) {
      s.pop();
    }
    res[i] = !s.empty() ? s.top() : -1; // 反之
    s.push(i);
  }
  return res;
}

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
