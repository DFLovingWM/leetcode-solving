/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function zigzagLevelOrder (root) {
  let result = []
  dfs(root, 0, result)
  return result
}

function dfs (node, level, result) {
  if (!node) return

  if (!result[level]) result[level] = []

  if (level & 1) { // Odd level, reversely push values.
    result[level].unshift(node.val)
  } else { // Even level, just push it.
    result[level].push(node.val)
  }

  dfs(node.left, level + 1, result)
  dfs(node.right, level + 1, result)
}

module.exports = zigzagLevelOrder