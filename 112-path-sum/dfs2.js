/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function hasPathSum (root, sum) {
  if (!root) return false

  sum -= root.val
  if (!root.left && !root.right) { // Make a judge at leaf node.
    return sum === 0
  } else {
    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
  }
}

module.exports = hasPathSum