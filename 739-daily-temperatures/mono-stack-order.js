/**
 * 单调栈，顺序遍历
 * 时间：O(N), 184ms
 * 空间：O(N)
 */
var dailyTemperatures = function (T) {
  const n = T.length
  const monoStack = new Stack() // 单调递减的栈
  const res = Array.from({ length: n }, () => 0)

  for (let i = 0; i < n; ++i) { // 顺序遍历
    while (!monoStack.empty() && T[monoStack.top()] < T[i]) {
      const lowerI = monoStack.pop()
      // 更新之前的
      res[lowerI] = i - lowerI
    }
    monoStack.push(i) // 存下标就足够了（可以通过数组访问值）
  }

  return res
};

// 栈
class Stack {
  constructor(arr = []) {
    this.arr = arr
  }

  top(n = 1) {
    return this.arr[this.arr.length - n]
  }

  pop() {
    return this.arr.pop()
  }

  push(x) {
    this.arr.push(x)
  }

  empty() {
    return this.arr.length === 0
  }

  size() {
    return this.arr.length
  }
}

module.exports = dailyTemperatures
