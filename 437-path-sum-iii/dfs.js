/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
function pathSum (root, sum) {
  if (!root) return 0 // Deal with empty tree(edge case).
  return pathSumFrom(root, sum) + pathSumFrom(root.left, sum) + pathSumFrom(root.right, sum)
}

function pathSumFrom (node, remain) {
  if (!node) return 0
  return (remain === node.val ? 1 : 0) + // Pass by current node.
    pathSumFrom(node.left, remain - node.val) + // Starting from current node, go left.
    pathSumFrom(node.right, remain - node.val) // Starting from current node, go right.
}

module.exports = pathSum