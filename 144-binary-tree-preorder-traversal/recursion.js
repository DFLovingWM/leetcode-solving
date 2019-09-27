/**
 * 递归
 */
function preorderTraversal (root) {
  if (!root) return []
  return [root.val].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right))
}
