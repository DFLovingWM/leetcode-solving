/**
 * Iterative version.
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal (root) {
  if (!root) return []

  let stack = new Stack(),
      path = []
  
  stack.push(root)
  while (!stack.empty()) {
    let curr = stack.pop()
    path.push(curr.val)

    curr.right && stack.push(curr.right) // Key! Push right child and then left child, so left child can always be traversed firstly.

    curr.left && stack.push(curr.left)
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