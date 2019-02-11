/**
 * Iterative version.
 * Use a Map/Set to record visited.
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal (root) {
  if (!root) return [] // Edge case.

  let path = [],
      visited = new Set(),
      stack = new Stack()
  
  stack.push(root)
  while (!stack.empty()) {
    // console.log(stack.arr.map(item => item.val), path)
    let curr = stack.top()

    if (curr.left && !visited.has(curr.left)) {
      stack.push(curr.left)
    } else if (curr.right && !visited.has(curr.right)) {
      stack.push(curr.right)
    } else {
      path.push(curr.val)
      visited.add(curr)
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