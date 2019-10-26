function inorder (root) {
  return !root ? [] : [
    ...inorder(root.left),
    root.val,
    ...inorder(root.right)
  ]
}

/**
 * 作弊：中序遍历化为数组，然后迭代该数组
 * 空间：O(N)
 */
function BSTIterator (root) {
  this.arr = inorder(root)
  this.i = 0
}

BSTIterator.prototype.next = function () {
  return this.arr[this.i++]
}

BSTIterator.prototype.hasNext = function () {
  return this.i < this.arr.length
}
