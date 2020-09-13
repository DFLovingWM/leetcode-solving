/**
 * stack：先压右、再压左
 * 
 * 时间：56ms
 */
var preorderTraversal = function(root) {
  const res = []
  if (!root) return res

  const stack = new Stack()
  stack.push(root)

  while (!stack.empty()) {
    const curr = stack.pop()

    // 遍历本结点
    res.push(curr.val)

    // 先将右结点压栈，再将左结点压栈。这样以来，之后左结点会先遍历
    if (curr.right) {
      stack.push(curr.right)
    }
    if (curr.left) {
      stack.push(curr.left)
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