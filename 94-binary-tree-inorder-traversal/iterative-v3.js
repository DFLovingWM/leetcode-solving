/**
 * Iterative(version 3).
 * Use a trick to avoid repeat.
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal (root) {
  let path = [],
      stack = new Stack()
  
  let curr = root
  while (curr || !stack.empty()) {
    // Go left to an end.
    while (curr) { // (2)
      stack.push(curr)
      curr = curr.left
    }

    // Current node.
    curr = stack.pop()
    path.push(curr.val)

    // Right child.
    curr = curr.right // (1)
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