/**
 * DFS
 * @param {TreeNode} root
 * @return {number}
 */
function sumNumbers (root) {
  if (!root) return 0

  const numbers = []
  dfs(root, numbers, '')
  return numbers.reduce((sum, str) => sum + Number(str), 0)
}

function dfs (node, numbers, partNumber) {
  partNumber += String(node.val)

  if (!node.left && !node.right) { // Leaf node
    numbers.push(partNumber)
    return
  }

  if (node.left) {
    dfs(node.left, numbers, partNumber)
  }

  if (node.right) {
    dfs(node.right, numbers, partNumber)
  }
}