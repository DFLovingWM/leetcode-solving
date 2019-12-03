/**
 * 序列化 + 哈希表聚集相同树
 * 
 * 时间：`O(N)`, 144ms
 */
var findDuplicateSubtrees = function (root) {
  const string2Trees = new Map()

  function dfs (node) {
    if (!node) return '#null'

    const curr = `#${node.val}` + dfs(node.left) + dfs(node.right)
    if (!string2Trees.has(curr)) string2Trees.set(curr, [])
    string2Trees.get(curr).push(node)
    return curr
  }

  dfs(root)

  const res = []
  for (const [s, nodes] of string2Trees) {
    if (nodes.length > 1) {
      res.push(nodes[0])
    }
  }
  return res
};