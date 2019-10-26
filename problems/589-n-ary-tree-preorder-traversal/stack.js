/**
 * 循环法：最简单的stack思路
 * 
 * 时间：704ms
 */
var preorder = function(root) {
  const res = []
  if (!root) return res

  const stack = new Stack()
  stack.push(root)

  while (!stack.empty()) {
    const curr = stack.pop()

    // 遍历本结点
    res.push(curr.val)

    // 倒序压栈
    for (let i = curr.children.length - 1; i >= 0; --i) {
      stack.push(curr.children[i])
    }
  }

  return res
};

class Stack {
  constructor (arr = []) {
    this.arr = arr
  }

  push (n) {
    this.arr.push(n)
  }

  pop () {
    return this.arr.pop()
  }

  empty () {
    return this.arr.length === 0
  }

  top () {
    return this.arr[this.arr.length - 1]
  }
}