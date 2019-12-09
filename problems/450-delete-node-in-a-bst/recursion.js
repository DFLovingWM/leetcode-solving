/**
 * 递归(有返回值)
 * 
 * 时间：`O(H)`, 88ms
 */
var deleteNode = function (node, key) {
  if (!node) return node

  if (node.val === key) {
    if (!node.left) return node.right // 如果没有左子树，则右子树上位（也包含左右都不存在的情况）
    if (!node.right) return node.left // 如果没有右子树，则左子树上位

    // （如果都存在）找到左子树的rightmost（或右子树的leftmost）上位
    let rightmost = node.left
    while (rightmost.right) rightmost = rightmost.right
    node.val = rightmost.val // 上位，成为新根
    node.left = deleteNode(node.left, rightmost.val) // 删掉rightmost
  } else if (key < node.val) {
    node.left = deleteNode(node.left, key)
  } else if (key > node.val) {
    node.right = deleteNode(node.right, key)
  }

  return node
};

module.exports = deleteNode