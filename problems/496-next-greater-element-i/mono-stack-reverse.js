/**
 * 单调栈，逆序遍历：
 * 对nums2处理，nums1相当于只是询问
 * 
 * 时间：O(N), 68ms
 */
var nextGreaterElement = function(queries, arr) {
  const monoStack = new Stack()
  const n = arr.length
  const answer = new Map()

  // 遍历
  for (let i = n - 1; i >= 0; --i) {
    while (!monoStack.empty() && arr[monoStack.top()] <= arr[i]) {
      monoStack.pop()
    }
    if (!monoStack.empty()) { // 更新答案
      answer.set(arr[i], arr[monoStack.top()])
    }
    monoStack.push(i)
  }

  return queries.map(q => answer.has(q) ? answer.get(q) : -1)
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
  [[4,1,2], [1,3,4,2]],
  [[2,4], [1,2,3,4]],
].forEach(input => {
  console.log(nextGreaterElement(...input))
})
