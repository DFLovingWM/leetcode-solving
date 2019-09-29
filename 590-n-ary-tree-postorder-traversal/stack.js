/**
 * 循环法：最简单的stack思路
 * 
 * 时间：716ms
 */
var postorder = function(root) {
  const res = []
  if (!root) return res

  const stack = new Stack()
  stack.push(root)

  while (!stack.empty()) {
    const curr = stack.pop()

    // 遍历本结点
    res.push(curr.val)

    // 顺序压栈
    for (let i = 0; i < curr.children.length; ++i) {
      stack.push(curr.children[i])
    }
  }

  return res.reverse()
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