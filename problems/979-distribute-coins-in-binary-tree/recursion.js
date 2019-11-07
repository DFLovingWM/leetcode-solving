/**
 * 递归（后序遍历）
 * 
 * 时间：`O(N)`, 68ms
 * 空间：`O(H)`
 */
var distributeCoins = function (root) {
  let res = 0

  function dfs (node) {
    if (!node) return 0
    
    const left = dfs(node.left)
    const right = dfs(node.right)
    const rest = node.val + left + right // 当前剩余 = 本有的 + 左子结点给予的 + 右子结点给予的
    res += Math.abs(rest - 1)
    return rest - 1 // 返回值：与1(最终合法值)的距离，即能给予父结点的个数
  }

  dfs(root)
  return res
};