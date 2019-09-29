/**
 * stack + HashSet标记
 * 
 * 时间：68ms
 */
var postorderTraversal = function(root) {
  const res = []
  if (!root) return res

  const stack = new Stack()
  stack.push(root)

  const visit = new Set()
  visit.add(root)

  while (!stack.empty()) {
    let curr = stack.top()
    
    // 左
    if (curr.left && !visit.has(curr.left)) {
      stack.push(curr.left)
      visit.add(curr.left) // 标记已加入待遍历中
      continue
    }

    // 右
    if (curr.right && !visit.has(curr.right)) {
      stack.push(curr.right)
      visit.add(curr.right) // 标记已加入待遍历中
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