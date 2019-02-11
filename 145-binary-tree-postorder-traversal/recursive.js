/**
 * Recursive version.
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal (root) {
  if (!root) return []

  return [
    ...postorderTraversal(root.left),
    ...postorderTraversal(root.right),
    root.val
  ]
}