/**
 * DFS
 * 
 * 时间：`O(N)`, 80ms
 */
var addOneRow = function (root, v, d) {
  
  function dfs (node, depth) {
    if (!node) return

    if (depth === d - 1) {
      const left = node.left
      const right = node.right
      // 新的子结点
      node.left = new TreeNode(v)
      node.right = new TreeNode(v)
      // 将旧子结点作为新子结点的子结点（真绕）
      node.left.left = left
      node.right.right = right

      return
    }

    dfs(node.left, depth + 1)
    dfs(node.right, depth + 1)
  }

  if (d === 1) { // 特殊情况
    const newRoot = new TreeNode(v)
    newRoot.left = root
    root = newRoot
  } else {
    dfs(root, 1)
  }

  return root
};