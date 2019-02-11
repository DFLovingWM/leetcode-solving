/**
 * Iterative with hash recording the visited nodes.
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal (root) {
  if (!root) return []

  let stack = new Stack(),
      path = []
  let visited = new Map()

  stack.push(root)
  while (!stack.empty()) {
    let node = stack.top()

    if (!visited.has(node)) {
      path.push(node.val)
      visited.set(node, true)
    }

    if (node.left && !visited.has(node.left)) {
      stack.push(node.left)
    } else if (node.right && !visited.has(node.right)) {
      stack.pop()
      stack.push(node.right)
    } else {
      stack.pop()
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