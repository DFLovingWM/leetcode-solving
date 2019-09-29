/**
 * stack + 标记
 * 时间：O(N), 64ms
 * 空间：O(N), 33.6MB
 */
var inorderTraversal = function(root) {
  const res = []
  if (!root) return res
  
  const hasVisitedLeft = new Set() // 标记某个结点是否已经遍历过left
  const stack = new Stack()
  stack.push(root)

  while (!stack.empty()) {
    const curr = stack.top()

    if (!hasVisitedLeft.has(curr) && curr.left) {
      stack.push(curr.left)
      hasVisitedLeft.add(curr)
      continue
    }

    stack.pop()
    res.push(curr.val)

    if (curr.right) {
      stack.push(curr.right)
    }
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