/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
function pathSum (root, sum) {
  if (!root) return []

  const paths = []
  helper(root, sum, paths)
  return paths
}

function helper (node, sum, paths, path = []) {
  if (!node.left && !node.right) { // Leaf node
    if (sum === node.val) {
      paths.push(path.concat(node.val))
    }
    return
  }

  sum -= node.val
  if (node.left) {
    helper(node.left, sum, paths, path.concat(node.val))
  }
  if (node.right) {
    helper(node.right, sum, paths, path.concat(node.val))
  }
}

module.exports = pathSum