/**
 * stack + HashSet标记
 * 
 * 时间：68ms
 * 空间：34.1MB
 */
var preorderTraversal = function(root) {
  const res = []
  if (!root) return res

  const stack = new Stack()
  stack.push(root)
  const visit = new Set()

  while (!stack.empty()) {
    const curr = stack.top()

    if (!visit.has(curr)) {
      // 【第1次来到curr】
      // 遍历该结点
      res.push(curr.val)
      visit.add(curr)
    }

    if (curr.left && !visit.has(curr.left)) {
      // 【第1次来到curr】
      // 即将访问左子结点
      stack.push(curr.left)
      continue
    }

    if (curr.right && !visit.has(curr.right)) {
      // 【第2次来到curr】
      // 即将访问右子结点
      stack.push(curr.right)
      continue
    }

    // 【第3次来到curr】
    // 来到这里表示左右子结点都不存在/访问完毕，可以删除本结点了
    stack.pop()
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