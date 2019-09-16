/**
 * 中序遍历来一次
 */
let prev, curr

var inorderSuccessor = function(root, p) {
  prev = curr = null
  inOrder(root, p)
  return curr
};

function inOrder (node, target) {
  if (node) {
    inOrder(node.left, target)
    if (prev && prev.val === target.val) curr = node
    prev = node
    inOrder(node.right, target)
  }
}
