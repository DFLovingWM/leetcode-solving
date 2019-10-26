/**
 * stack：先压左、再压右，得到反路径
 * 
 * 时间：56ms
 */
var postorderTraversal = function(root) {
  const res = []
  if (!root) return res

  const stack = new Stack()
  stack.push(root)

  while (!stack.empty()) {
    const curr = stack.pop()

    // 遍历本结点
    res.push(curr.val)

    // 先将左结点压栈，再将右结点压栈。这样以来，之后右结点会先遍历
    if (curr.left) {
      stack.push(curr.left)
    }
    if (curr.right) {
      stack.push(curr.right)
    }
  }

  return res.reverse()
};

class Stack {
  constructor () {
    this.arr = []
  }

  empty () {
    return this.arr.length === 0
  }

  push (x) {
    this.arr.push(x)
  }

  pop () {
    return this.arr.pop()
  }

  top () {
    return this.arr[this.arr.length - 1]
  }
}