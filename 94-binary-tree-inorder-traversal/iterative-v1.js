/**
 * Iterative(version 1)：cut the relation with left node after pushing it.
 * Not a good method because it mutates the tree.
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal (root) {
  if (!root) return []

  let path = [],
      stack = new Stack()
  
  stack.push(root)
  while (!stack.empty()) {
    let curr = stack.top()
    
    // Firstly check left child
    if (curr.left) {
      stack.push(curr.left)
      curr.left = null // Cut the relation, avoiding repeats when backtracking.
      continue
    }

    // Then visit current node
    stack.pop()
    path.push(curr.val)

    // Finally check right child
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