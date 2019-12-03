/**
 * 2次DFS
 * 
 * 时间：`O(N)`, 124ms
 */
var deleteTreeNodes = function (n, parents, values) {
  const root = 0

  const children = new Map() // 结点 => 子结点数组
  for (let i = 0; i < n; ++i) {
    const [parent, child] = [parents[i], i]
    if (!children.has(parent)) {
      children.set(parent, [])
    }
    children.get(parent).push(child)
  }

  // 计算子树和
  const treeSum = new Map()
  function dfs (node) {
    let sum = values[node]
    for (const child of (children.get(node) || [])) {
      sum += dfs(child)
    }
    treeSum.set(node, sum)
    return sum
  }
  dfs(root)

  // 数结点数
  function dfs2 (node) {
    if (treeSum.get(node) === 0) return 0 // 和为0的结点会被删除，所以算0个，也不用深入看了

    let num = 1
    for (const child of (children.get(node) || [])) {
      num += dfs2(child)
    }
    return num
  }
  const res = dfs2(root)

  return res
};

[
  [7, [-1,0,0,1,2,2,2], [1,-2,4,0,-2,-1,-1]],
].forEach(input => {
  console.log(deleteTreeNodes(...input))
})