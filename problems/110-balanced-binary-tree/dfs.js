const FALSE = 'can return true right now'

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return getHeight(root) !== FALSE
}

function getHeight (node) {
  if (!node) return 0

  let leftHeight = getHeight(node.left)
  if (leftHeight === FALSE) return FALSE

  let rightHeight = getHeight(node.right)
  if (rightHeight === FALSE) return FALSE

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return FALSE
  } else {
    return 1 + Math.max(leftHeight, rightHeight)
  }
}

module.exports = isBalanced