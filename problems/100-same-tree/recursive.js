/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 二叉树式递归 [52ms] beating 100%
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean} Whether p is 'equal' to q
 */
function isSameTree (p, q) {
  if (!p && !q) return true

  return !!(p && q &&
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right))
}

module.exports = isSameTree