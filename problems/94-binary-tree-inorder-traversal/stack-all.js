/**
 * stack + 当前所有左结点最优先
 * 时间：O(N), 60ms
 * 空间：O(N), 33.6MB
 */
var inorderTraversal = function(root) {
  const res = []
  if (!root) return res

  const stack = new Stack()
  stack.push(root)

  // 把root上的所有左结点先入栈
  while (root.left) {
    stack.push(root.left)
    root = root.left
  }

  // 开始遍历
  while (!stack.empty()) {
    const curr = stack.pop()

    // 当前结点
    res.push(curr.val)

    // 右结点
    if (curr.right) {
      let p = curr.right
      stack.push(p)

      // 将以此右结点为根的所有左结点入栈（类似第一步）
      while (p.left) {
        stack.push(p.left)
        p = p.left
      }
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