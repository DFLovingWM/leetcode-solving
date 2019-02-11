/**
 * Iterative(version 2).
 * Instead of mutation, use a hash map to remember those who has been visited.
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal (root) {
  if (!root) return [] // Edge case.

  let path = [],
      stack = new Stack(),
      visited = new Map() // mapping: TreeNode => boolean

  stack.push(root)
  while (!stack.empty()) {
    let curr = stack.top()
    
    if (curr.left && !visited.has(curr.left)) { // Only walk through unvisited ones, cuz left node can be repeated.
      stack.push(curr.left)
    } else {
      stack.pop()
      path.push(curr.val)
      visited.set(curr, true) // Remember this node.
      if (curr.right) {
        stack.push(curr.right)
      }
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