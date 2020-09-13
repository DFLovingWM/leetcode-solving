/**
 * stack + 斩断左结点羁绊
 * 时间：O(N), 64ms
 * 空间：O(N), 33.7MB
 */
var inorderTraversal = function(root) {
  const res = []
  const stack = new Stack()
  
  let curr = root
  while (curr || !stack.empty()) {
    while (curr) { // (2)
      stack.push(curr)
      curr = curr.left
    }

    // 此时curr为空，从stack中取一个
    curr = stack.pop()

    // 输出该结点
    res.push(curr.val)

    // 检查右结点R：
    // 如果R存在，则以R为子根重复上述过程
    // 如果R不存在，由(2)处可知在下一次循环中，避免了又遍历左结点的过程
    curr = curr.right
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

module.exports = inorderTraversal