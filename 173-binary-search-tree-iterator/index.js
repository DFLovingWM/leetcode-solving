function inorder (root) {
  return !root ? [] : [
    ...inorder(root.left),
    root.val,
    ...inorder(root.right)
  ]
}

/**
 * @param {TreeNode} root
 */
function BSTIterator (root) {
  this.arr = inorder(root)
  this.i = 0
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.arr[this.i++]
}

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.i < this.arr.length
}

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = Object.create(BSTIterator).createNew(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */