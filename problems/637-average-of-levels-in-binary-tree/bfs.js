/**
 * 层次 => BFS
 * 
 * 时间：`O(N)`, 60ms
 */
var averageOfLevels = function (root) {
  const res = []
  let currs = []
  currs.push(root)

  while (currs.length > 0) {
    res.push(currs.reduce((acc, node) => acc + node.val, 0) / currs.length) // 求平均值
    const nexts = []
    for (const curr of currs) {
      if (curr.left) nexts.push(curr.left)
      if (curr.right) nexts.push(curr.right)
    }
    currs = nexts
  }

  return res
};