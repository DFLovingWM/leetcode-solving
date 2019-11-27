/**
 * DFS（我偏不用BFS
 */
var maxLevelSum = function (root) {
  const level2Sum = new Map()
  let maxLevel = 1

  function dfs (node, level) {
    if (!node) return

    level2Sum.set(level, (level2Sum.get(level) || 0) + node.val)
    maxLevel = Math.max(maxLevel, level)

    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }

  dfs(root, 1)

  // 找和最大的层
  let res = 1
  for (let i = 1; i <= maxLevel; ++i) {
    if (level2Sum.get(i) > level2Sum.get(res)) {
      res = i
    }
  }
  return res
};