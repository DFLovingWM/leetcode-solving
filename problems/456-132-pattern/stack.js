/**
 * 栈
 */
var find132pattern = function (nums) {
  const n = nums.length

  const leftMin = new Array(n).fill(0) // 记录左边最小值（因为要使s1尽可能小）
  leftMin[0] = nums[0]
  for (let i = 1; i < n; ++i) {
    leftMin[i] = Math.min(leftMin[i - 1], nums[i])
  }

  const stack = new Stack() // 单调递减栈
  for (let i = n - 1; i >= 0; --i) {
    const s3 = nums[i]
    const s1 = leftMin[i]
    if (s3 > s1) { // 则尝试找s2
      while (!stack.empty() && stack.top() <= s1) {
        stack.pop()
      }
      if (!stack.empty() && stack.pop() < s3) return true // 找到s2
      stack.push(s3)
    }
  }
  return false
};

class Stack {
  constructor () {
    this.arr = []
  }

  empty () {
    return this.arr.length === 0
  }

  push (x) {
    this.arr.push(x)
  }

  pop () {
    return this.arr.pop()
  }

  top () {
    return this.arr[this.arr.length - 1]
  }
}

module.exports = find132pattern