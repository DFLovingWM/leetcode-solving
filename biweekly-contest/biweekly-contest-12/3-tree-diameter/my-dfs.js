/**
 * 对度为1的点进行DFS
 * 
 * 时间：9516ms（在超时的边缘疯狂试探）
 * 空间：73.3MB
 */
var treeDiameter = function (edges) {
  // 获取结点数
  let n = 0
  for (const [a, b] of edges) {
    n = Math.max(n, a, b)
  }
  ++n

  // 构建邻接表
  const nexts = Array.from({ length: n }, () => [])
  const degree = Array.from({ length: n }, () => 0)
  for (const [a, b] of edges) {
    nexts[a].push(b)
    nexts[b].push(a)
    ++degree[a]
    ++degree[b]
  }

  // 对每个degree为1的结点进行DFS，取最长路径
  let res = 0
  for (let i = 0; i < n; ++i) {
    if (degree[i] === 1) {
      res = Math.max(res, dfs(nexts, new Set(), i))
    }
  }

  // 路径长 = 结点数 - 1
  return res - 1
};

function dfs (nexts, visit, i) {
  let res = 0
  visit.add(i)

  for (const j of nexts[i]) {
    if (!visit.has(j)) {
      res = Math.max(res, dfs(nexts, visit, j))
    }
  }

  return res + 1
}

module.exports = treeDiameter