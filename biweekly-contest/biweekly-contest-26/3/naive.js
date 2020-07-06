/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
  let res = 0;

  function dfs(node, max) {
    if (!node) return;

    const nextMax = Math.max(max, node.val);
    if (nextMax <= node.val) ++res;
    dfs(node.left, nextMax);
    dfs(node.right, nextMax);
  }

  dfs(root, -Infinity);
  return res;
};