
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0 // Edge case: empty tree, with no path.
  
  function dfs (curr, depth) {
    if (!curr.left && !curr.right) { // When arriving at leaf, get the possible minimum.
      result = Math.min(result, depth)
      return
    }

    if (curr.left) {
      dfs(curr.left, depth + 1)
    }

    if (curr.right) {
      dfs(curr.right, depth + 1)
    }
  }

  let result = Infinity
  dfs(root, 1)
  return result
}

module.exports = minDepth