/**
 * DFS
 * 
 * 时间：`O(H * 2^H)`
 */
var printTree = function (root) {
  // DFS：计算深度
  function getDepth (node) {
    if (!node) return 0
    return 1 + Math.max(getDepth(node.left), getDepth(node.right))
  }
  const depth = getDepth(root)
  const res = Array.from({ length: depth }, () => Array.from({ length: (1 << depth) - 1 }, () => ''))

  // DFS：填数字
  function dfs (node, row, col) {
    res[row][col] = String(node.val)

    const offset = 1 << (depth - row - 2)
    if (node.left) {
      dfs(node.left, row + 1, col - offset) // 左子结点，在当前结点下一行、左边偏移offset处
    }
    if (node.right) {
      dfs(node.right, row + 1, col + offset) // 右子结点同理，在右边
    }
  }
  dfs(root, 0, (1 << depth - 1) - 1)

  return res
};