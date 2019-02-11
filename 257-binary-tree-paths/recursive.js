/**
 * @param {TreeNode} root
 * @return {string[]}
 */
function binaryTreePaths (root) {
  if (!root) return []

  let result = []
  dfs(root, result)
  return result
}

function dfs (root, result = [], partialResult = []) {
  partialResult.push(root.val)

  if (!root.left && !root.right) { // Leaf node
    result.push(partialResult.join('->'))
  } else {
    if (root.left) dfs(root.left, result, partialResult)
    if (root.right) dfs(root.right, result, partialResult)
  }

  partialResult.pop() // Backtrack.
}

module.exports = binaryTreePaths