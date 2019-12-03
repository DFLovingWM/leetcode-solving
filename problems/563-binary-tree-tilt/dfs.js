/**
 * DFS
 */
var findTilt = function (root) {
  let res = 0

  // 返回以`node`为根的子树的和
  function dfs (node) {
    if (!node) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)
    res += Math.abs(left - right) // 同时计算`node`的坡度
    return left + right + node.val
  }

  dfs(root)
  return res
};