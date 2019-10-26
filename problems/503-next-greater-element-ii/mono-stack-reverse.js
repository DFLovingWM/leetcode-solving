/**
 * 单调栈，逆序循环2N次（下标取余）
 */
var nextGreaterElements = function(nums) {
  const monoStack = new Stack()
  const n = nums.length
  const res = Array.from({ length: n }, () => -1)

  for (let j = n * 2 - 1; j >= 0; --j) { // 逆序循环2轮
    const i = j % n // 取余

    while (!monoStack.empty() && nums[monoStack.top()] <= nums[i]) {
      monoStack.pop()
    }
    if (!monoStack.empty()) {
      res[i] = nums[monoStack.top()]
    }
    monoStack.push(i)
  }

  return res
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
  [1,2,1]
].forEach(input => {
  console.log(nextGreaterElements(input))
})
