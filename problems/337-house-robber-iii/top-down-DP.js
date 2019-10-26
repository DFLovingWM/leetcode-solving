/**
 * Top-down DP：
 * 注意缓存时的细节（因为node是引用，不能简单地化为字符串，处理起来有点麻烦）
 */
var rob = function (root) {
  const cache = new Map()

  function dfs (node, rob) {
    if (!node) return 0
    if (cache.has(node) && cache.get(node)[Number(rob)]) return cache.get(node)[Number(rob)]

    let res
    if (rob) { // 偷
      res = node.val + dfs(node.left, false) + dfs(node.right, false)
    } else { // 不偷
      res = Math.max(dfs(node.left, true), dfs(node.left, false)) +
        Math.max(dfs(node.right, true), dfs(node.right, false))
    }
    
    if (!cache.has(node)) cache.set(node, [])
    cache.get(node)[Number(rob)] = res
    return res
  }

  return Math.max(dfs(root, true), dfs(root, false))
};

module.exports = rob