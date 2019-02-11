/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function pruneTree (root) {
  hasOne(root)
  return root
}

function hasOne (node) {
  if (!node) return false

  let leftHasOne = hasOne(node.left)
  if (!leftHasOne) {
    node.left = null
  }

  let rightHasOne = hasOne(node.right)
  if (!rightHasOne) {
    node.right = null
  }

  return node.val === 1 || leftHasOne || rightHasOne
}

module.exports = pruneTree