function* inOrder (node) {
  if (!node) return

  yield* inOrder(node.left)
  yield node.val
  yield* inOrder(node.right)
}

/**
 * 借助JS生成器，进行中序遍历
 * 空间：O(H)
 */
function BSTIterator (root) {
  this.iterator = inOrder(root)
  this.curr = this.iterator.next()
}

BSTIterator.prototype.next = function () {
  const res = this.curr.value
  this.curr = this.iterator.next()
  return res
}

BSTIterator.prototype.hasNext = function () {
  return !this.curr.done
}
