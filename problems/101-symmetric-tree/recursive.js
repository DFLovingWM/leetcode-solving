/**
 * Binary-tree-style recursion.
 * [76ms]
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric (root) {
  return !root || isSymmetricBetween(root.left, root.right)
}

function isSymmetricBetween (p, q) {
  if (!p && !q)
    return true
  else if (!p || !q)
    return false
  else
    return p.val === q.val && isSymmetricBetween(p.left, q.right) && isSymmetricBetween(p.right, q.left)
}

module.exports = isSymmetric