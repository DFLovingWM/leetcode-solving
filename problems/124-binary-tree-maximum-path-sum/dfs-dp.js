/**
 * DP
 */
let max // 记录最大路径和（答案）

var maxPathSum = function (root) {
  max = -Infinity
  dfs(root)
  return max
};

function dfs (node) {
  if (!node) return 0

  const left = dfs(node.left)
  const right = dfs(node.right)

  const curr = node.val + Math.max(left, 0) + Math.max(right, 0) // 以node为根的最大路径
  max = Math.max(max, curr)

  return Math.max(left, right, 0) + node.val // 走较大的路，返回给父结点继续选（DP）
}

module.exports = maxPathSum