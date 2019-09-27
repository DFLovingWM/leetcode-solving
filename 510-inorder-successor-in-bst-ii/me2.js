/**
 * 先找右子树中最左边的，再找第一个往右走的父结点
 * 时间：O(N), 1988ms
 */
var inorderSuccessor = function(node) {
  if (node.right) {
    node = node.right // 右子树
    while (node.left) { // 最左结点
      node = node.left
    }
  } else {
    while (node.parent && node.parent.right === node) {
      node = node.parent
    }
    node = node.parent
  }

  return node
};