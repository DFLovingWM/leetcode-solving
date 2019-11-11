/**
 * 2层嵌套哈希Map + 排序
 * 
 * 时间：76ms
 */
var verticalTraversal = function (root) {
  const co = new Map()

  function dfs (node, x, y) {
    if (!node) return

    if (!co.has(x)) co.set(x, new Map())
    const xs = co.get(x)
    if (!xs.has(y)) xs.set(y, [])
    xs.get(y).push(node)

    dfs(node.left, x - 1, y - 1)
    dfs(node.right, x + 1, y - 1)
  }

  dfs(root, 0, 0)

  const res = []
  const xs = Array.from(co.keys()).sort((a, b) => a - b) // x升序
  for (const x of xs) {
    let tmp = []
    const ys = Array.from(co.get(x).keys()).sort((a, b) => b - a) // y降序
    for (const y of ys) {
      const nodes = co.get(x).get(y)
      nodes.sort((A, B) => A.val - B.val) // 坐标相同时，按照val升序
      tmp = tmp.concat(nodes.map(node => node.val))
    }
    res.push(tmp)
  }

  return res
};