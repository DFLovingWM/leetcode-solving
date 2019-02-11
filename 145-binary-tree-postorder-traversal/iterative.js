/**
 * Iterative version.
 * Use a trick.
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal (root) {
  if (!root) return [] // Edge case.

  let path = [],
      stack = new Stack()

  stack.push(root)
  while (!stack.empty()) {
    let curr = stack.pop()

    path.unshift(curr.val)

    if (curr.left) {
      stack.push(curr.left)
    }
    if (curr.right) {
      stack.push(curr.right)
    }
  }

  return path
}

// A simple implementation of STACK
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