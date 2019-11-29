/**
 * LCA问题，按套路解
 * 
 * 时间：`O(N)`, 72ms
 */
var lcaDeepestLeaves = function (root) {
  const parent = new Map()
  const level2Nodes = new Map()
  let maxLevel = 0

  function dfs (node, level) {
    if (!node) return

    if (!level2Nodes.has(level)) level2Nodes.set(level, [])
    level2Nodes.get(level).push(node)
    maxLevel = Math.max(maxLevel, level)

    if (node.left) {
      parent.set(node.left, node)
      dfs(node.left, level + 1)
    }
    if (node.right) {
      parent.set(node.right, node)
      dfs(node.right, level + 1)
    }
  }

  dfs(root, 0)
  let currs = level2Nodes.get(maxLevel)
  while (currs.length > 1) {
    currs = [...new Set(currs.map(node => parent.get(node)))]
  }
  return currs[0]
};