/**
 * Stack + Hash
 * O(N)
 */
var nextGreaterElement = function(nums1, nums2) {
  let hash = new Map()
  let stack = new Stack()

  for (let i = 0; i < nums2.length; ++i) {
    while (!stack.empty() && nums2[stack.top()] < nums2[i]) {
      hash.set(nums2[stack.pop()], nums2[i])
    }
    stack.push(i)
  }

  let result = []
  for (const query of nums1) {
    result.push(hash.has(query) ? hash.get(query) : -1)
  }

  return result
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
].forEach(input => console.log(nextGreaterElement(...input)))