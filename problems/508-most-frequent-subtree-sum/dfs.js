/**
 * DFS：求子树和 + 记录和的频次
 * 
 * 时间：`O(N)`, 92ms
 */
var findFrequentTreeSum = function (root) {
  if (!root) return []
  const sum2Count = new Map()

  // 求子树和
  function dfs (node) {
    let sum = node.val
    if (node.left) sum += dfs(node.left)
    if (node.right) sum += dfs(node.right)
    sum2Count.set(sum, (sum2Count.get(sum) || 0) + 1)
    return sum
  }

  dfs(root)

  // 求最大频次
  const maxCount = Math.max(...sum2Count.values())
  const res = []
  for (const [sum, count] of sum2Count) {
    if (count === maxCount) {
      res.push(sum)
    }
  }
  return res
};