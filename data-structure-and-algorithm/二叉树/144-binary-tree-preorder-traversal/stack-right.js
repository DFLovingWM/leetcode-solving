/**
 * stack：仅保存右结点
 * 参考：https://leetcode.com/problems/binary-tree-preorder-traversal/discuss/45466/C%2B%2B-Iterative-Recursive-and-Morris-Traversal
 * 
 * 时间：64ms
 * 空间：33.5MB
 */
var preorderTraversal = function(root) {
  const res = []
  if (!root) return res

  const stack = new Stack()
  let curr = root

  while (curr || !stack.empty()) {
    if (curr) { // 存在下一个
      // 遍历该结点
      res.push(curr.val)

      // 将右结点压栈，待遍历
      if (curr.right) {
        stack.push(curr.right)
      }

      // 下一个到左结点
      curr = curr.left
    } else { // 不存在下一个，就从栈中取
      curr = stack.pop()
    }
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