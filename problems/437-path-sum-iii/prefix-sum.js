/**
 * 前缀和 + HashMap
 * 
 * 时间：108ms
 */
let ans

var pathSum = function (root, sum) {
  if (!root) return 0

  ans = 0
  dfs(root, sum, 0, new Map([[0, 1]]))
  return ans
};

function dfs (node, targetSum, prefixSum, count) {
  prefixSum += node.val

  ans += (count.get(prefixSum - targetSum) || 0) // 更新答案

  // 探索（向下）
  count.set(prefixSum, (count.get(prefixSum) || 0) + 1)
  if (node.left) dfs(node.left, targetSum, prefixSum, count)
  if (node.right) dfs(node.right, targetSum, prefixSum, count)
  // 回溯（向上）
  count.set(prefixSum, count.get(prefixSum) - 1)
}