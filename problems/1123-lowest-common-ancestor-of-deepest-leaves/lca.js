/**
 * 反向路径，收敛
 * 
 * 时间：`O(N)`, 80ms
 */
var lcaDeepestLeaves = function (root) {
  const parent = new Map() // 映射：结点 => 父结点
  const level2Nodes = new Map() // 映射：深度 => 结点集

  function dfs (node, level) {
    if (!node) return

    // 本结点
    if (!level2Nodes.has(level)) level2Nodes.set(level, new Set())
    level2Nodes.get(level).add(node)
    // 左
    if (node.left) {
      parent.set(node.left, node)
      dfs(node.left, level + 1)
    }
    // 右
    if (node.right) {
      parent.set(node.right, node)
      dfs(node.right, level + 1)
    }
  }

  dfs(root, 0) // 遍历整个树

  // 从最大深度的所有叶子结点出发
  const maxLevel = Math.max(...level2Nodes.keys())
  let currs = level2Nodes.get(maxLevel)

  // 直到收敛到共同的1个LCA
  while (currs.size > 1) {
    const prevs = new Set()
    for (const curr of currs) {
      prevs.add(parent.get(curr))
    }
    currs = prevs
  }

  return currs.values().next().value
};

module.exports = lcaDeepestLeaves