/**
 * stack：所有当前结点优先
 * 
 * 时间：O(N), 56ms
 * 空间：O(N), 33.8MB
 */
var preorderTraversal = function(root) {
  const res = []
  if (!root) return res

  const stack = new Stack()

  // 把root上的所有中间结点先遍历、入栈
  while (root) {
    res.push(root.val)
    stack.push(root)
    root = root.left
  }

  // 开始遍历
  while (!stack.empty()) {
    const curr = stack.pop()

    // 右结点
    if (curr.right) {
      let p = curr.right

      // 将以此右结点为根的所有中间结点入栈（类似第一步）
      while (p) {
        stack.push(p)
        res.push(p.val)
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