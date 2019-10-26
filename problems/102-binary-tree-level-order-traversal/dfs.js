/**
 * DFS
 * [72ms]
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder (root) {
  let result = []
  dfs(root, 0, result)
  return result
}

function dfs (node, level, result) {
  if (!node) return

  if (!result[level]) result[level] = []
  result[level].push(node.val)

  dfs(node.left, level + 1, result)
  dfs(node.right, level + 1, result)
}

module.exports = levelOrder