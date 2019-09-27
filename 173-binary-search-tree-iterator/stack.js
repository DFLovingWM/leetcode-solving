/**
 * 借助stack，保存左子树
 * 时间：164ms
 * 空间：48.6MB
 */
var BSTIterator = function(root) {
  this.stack = new Stack() // 使用O(H)空间
  while (root) {
    this.stack.push(root)
    root = root.left
  }
};

// T(H)，似乎达不到T(1)
BSTIterator.prototype.next = function() {
  const curr = this.stack.pop()
  if (curr.right) { // 遍历完该结点后，检查right（以right为根的子树）
    let p = curr.right
    while (p) {
      this.stack.push(p)
      p = p.left
    }
  }
  return curr.val
};

// T(1)
BSTIterator.prototype.hasNext = function() {
  return !this.stack.empty()
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