/**
 * Return-value-version recursion.
 * Refer to: https://leetcode.com/problems/binary-tree-pruning/discuss/122730/C%2B%2BJavaPython-Self-Explaining-Solution-and-2-lines
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function pruneTree (root) {
  return filter(root)
}

/**
 * Return null if a node is 'invalid', or return itself.
 * @param {TreeNode} node The origin node.
 * @returns {TreeNode} The node itself or null.
 */
function filter (node) {
  if (!node) return null

  // Children first.
  node.left = filter(node.left)
  node.right = filter(node.right)

  // Then (sub)root.
  if (!node.left && !node.right && node.val !== 1) {
    return null
  } else {
    return node
  }
}

module.exports = pruneTree