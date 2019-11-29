/**
 * Top-down DP
 * 
 * 时间：84ms
 */
var rob = function (root) {
  const cache = new Map()
  
  function dfs (node) {
    if (!node) return 0
    if (cache.has(node)) return cache.get(node)
  
    // 偷node
    const yes = node.val +
      (node.left ? dfs(node.left.left) + dfs(node.left.right) : 0) +
      (node.right ? dfs(node.right.left) + dfs(node.right.right) : 0)
    // 不偷node
    const no = dfs(node.left) + dfs(node.right)
    const res = Math.max(yes, no)
    cache.set(node, res)
    return res
  }

  return dfs(root)
};