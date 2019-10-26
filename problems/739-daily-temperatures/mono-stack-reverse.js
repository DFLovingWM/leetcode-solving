/**
 * 单调栈，逆序遍历
 * 时间：O(N), 196ms
 * 空间：O(N)
 */
var dailyTemperatures = function(T) {
  const monoStack = new Stack() // 单调递减的栈
  const res = Array.from({ length: T.length }, () => 0)

  for (let i = T.length - 1; i >= 0; --i) { // 因为找的是右边，所以逆序遍历省时间
    while (!monoStack.empty() && T[monoStack.top()] <= T[i]) {
      monoStack.pop()
    }
    if (!monoStack.empty()) {
      res[i] = monoStack.top() - i // 答案保存天数差
    }
    monoStack.push(i) // 存下标就足够了（可以通过数组访问值）
  }

  return res
};

// 栈
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

  push (x) {
    this.arr.push(x)
  }

  empty () {
    return this.arr.length === 0
  }

  size () {
    return this.arr.length
  }
}

module.exports = dailyTemperatures
