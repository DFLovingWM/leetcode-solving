/**
 * 循环
 * 
 * 时间：`O(H)`, 88ms
 */
var deleteNode = function (root, key) {
  // 考虑到root也可能会被删除，这里设一个dummy结点
  const dummy = new TreeNode()
  dummy.left = root

  let [parent, node] = [dummy, dummy.left]
  while (node && node.val !== key) {
    parent = node
    if (key < node.val) {
      node = node.left
    } else {
      node = node.right
    }
  }
  if (!node) return dummy.left // 空树，或者找不到

  if (!node.left || !node.right) { // 左或右子树为空，直接代替
    const one = node.left || node.right
    // （这里有点傻）因为不知道node是parent的左还是右子，所以需要判断一下
    if (parent.left === node) {
      parent.left = one
    } else if (parent.right === node) {
      parent.right = one
    }
  } else { // 左右都不为空，需要寻找rightmost/leftmost上位
    let [p, rightmost] = [node, node.left]
    while (rightmost.right) {
      p = rightmost
      rightmost = rightmost.right
    }
    // 删掉旧的rightmost结点
    if (p === node) {
      node.left = rightmost.left
    } else {
      p.right = null
    }
    // 上位
    node.val = rightmost.val
  }

  return dummy.left
};

module.exports = deleteNode