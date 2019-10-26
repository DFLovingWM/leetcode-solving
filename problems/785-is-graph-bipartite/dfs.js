/**
 * DFS
 * 
 * 时间：68ms
 */
var isBipartite = function (graph) {
  const n = graph.length
  const colors = new Array(n).fill(0)

  for (let i = 0; i < n; ++i) {
    if (!colors[i] && !dfs(graph, colors, i, -1)) {
      return false
    }
  }
  return true
}

function dfs (graph, colors, curr, prevColor) {
  // 着色
  colors[curr] = -prevColor

  // 检测相邻结点是否同色
  for (const next of graph[curr]) {
    if (colors[next]) {
      if (colors[next] === colors[curr]) return false
    } else {
      if (!dfs(graph, colors, next, -prevColor)) return false
    }
  }
  return true
}

module.exports = isBipartite