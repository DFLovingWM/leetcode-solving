/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Recursive version
 * [108ms]
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal (root) {
  if (!root) return []
  return [].concat(inorderTraversal(root.left)).concat([root.val]).concat(inorderTraversal(root.right))
}
