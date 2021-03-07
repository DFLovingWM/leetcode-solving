const CUT = undefined // 表示“已斩断”，要与null（本就不存在）区分开

/**
 * stack + 斩断羁绊
 * 
 * 时间：60ms
 * 空间：33.7MB
 */
var preorderTraversal = function(root) {
  const res = []
  if (!root) return res

  const stack = new Stack()
  stack.push(root)

  while (!stack.empty()) {
    const curr = stack.top()

    // 【第1次来到curr】
    // 遍历该结点
    if (curr.left !== CUT && curr.right !== CUT) {
      res.push(curr.val)
    }

    if (curr.left) {
      // 【第1次来到curr】
      // 即将访问左子结点B
      stack.push(curr.left)
      curr.left = CUT // 斩断与左结点的边
      continue
    }

    if (curr.right) {
      // 【第2次来到curr】
      // 即将访问右子结点C
      stack.push(curr.right)
      curr.right = CUT // 斩断与右结点的边
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