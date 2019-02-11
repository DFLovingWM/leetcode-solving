/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function hasPathSum (root, sum) {
  if (!root) return false
  return helper(root, sum)
}

function helper (node, needed) {
  needed -= node.val

  if (node.left && node.right) {
    return helper(node.left, needed) || helper(node.right, needed)
  } else if (node.left) {
    return helper(node.left, needed)
  } else if (node.right) {
    return helper(node.right, needed)
  } else {
    return needed === 0
  }
}

module.exports = hasPathSum