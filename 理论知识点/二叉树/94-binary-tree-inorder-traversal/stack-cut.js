/**
 * stack + 斩断左结点羁绊
 * 时间：O(N), 60ms
 * 空间：O(N), 34.1MB
 */
var inorderTraversal = function(root) {
  const res = []
  if (!root) return res

  const stack = new Stack()
  stack.push(root)

  while (!stack.empty()) {
    const curr = stack.top()
    
    // 先检查左子树
    if (curr.left) {
      stack.push(curr.left)
      curr.left = null // 斩断该结点与左结点的边，防止之后回到该结点时，又再次遍历左结点
      continue
    }
    
    // 没有左子树，就遍历该结点
    stack.pop()
    res.push(curr.val)

    // 再遍历右结点
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