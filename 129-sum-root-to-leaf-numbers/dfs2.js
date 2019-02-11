/**
 * DFS
 * @param {TreeNode} root
 * @return {number}
 */
function sumNumbers (root) {
  return root ? dfs(root) : 0
}

/**
 * Get the sum from target node.
 * @param {TreeNode} node Starting node.
 * @param {Number} number Number so far.
 */
function dfs (node, number = 0) {
  if (!node) return 0

  number = number * 10 + node.val
  if (!node.left && !node.right) return number // Leaf returns a number(to sum up)
  return dfs(node.left, number) + dfs(node.right, number) // Sum up
}