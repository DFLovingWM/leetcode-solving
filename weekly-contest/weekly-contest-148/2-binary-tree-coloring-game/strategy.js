/**
 * 分类讨论，3种最优的策略：
 * 1. x的父结点p：收获p与p.left子树所有结点
 * 2. 左子结点l：收获l子树所有结点
 * 3. 右子结点r：收获r子树所有结点
 * 取子树结点数最大值，看结点数是否超过一半。
 * 如果这3种策略都不行，则没有更好的了。
 * 
 * 时间：`O(N)`, 68ms
 */
var btreeGameWinningMove = function (root, n, x) {
  let xLeft = 0
  let xRight = 0

  // 数以`node`为根的子树的结点数量
  function dfs (node) {
    if (!node) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)
    if (node.val === x) {
      xLeft = left
      xRight = right
    }
    return left + right + 1
  }

  dfs(root)
  const xParent = n - xLeft - xRight - 1
  return Math.max(xParent, xLeft, xRight) * 2 > n // 看(最大值)是否超过一半
};

module.exports = btreeGameWinningMove