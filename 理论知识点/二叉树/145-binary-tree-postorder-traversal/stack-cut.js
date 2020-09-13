/**
 * stack + 斩断羁绊
 * 
 * 时间：68ms
 */
var postorderTraversal = function(root) {
  const res = []
  if (!root) return res

  const stack = new Stack()
  stack.push(root)

  while (!stack.empty()) {
    let curr = stack.top()
    
    // 左
    if (curr.left) {
      stack.push(curr.left)
      curr.left = null // 删除边
      continue
    }

    // 右
    if (curr.right) {
      stack.push(curr.right)
      curr.right = null // 删除边
      continue
    }

    // 中
    stack.pop()
    res.push(curr.val)
  }

  return res
};

// 栈
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