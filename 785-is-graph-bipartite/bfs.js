/**
 * BFS
 * 
 * 时间：80ms
 */
var isBipartite = function (graph) {
  const n = graph.length
  const colors = new Array(n).fill(0)
  
  // 因为图可能是不连通的，所以需要遍历每个点进行BFS
  for (let i = 0; i < n; ++i) {
    if (!colors[i] && !bfs(graph, colors, i)) {
      return false
    }
  }
  return true
};

function bfs (graph, colors, start) {
  const queue = []

  queue.push(start)
  colors[start] = 1

  while (queue.length) {
    const i = queue.shift()

    for (const j of graph[i]) {
      if (colors[j] === 0) { // 未着色
        colors[j] = -colors[i]
        queue.push(j)
      } else if (colors[j] !== -colors[i]) { // 已着色，但不是应有的颜色，则直接失败
        return false
      }
    }
  }

  return true
}

module.exports = isBipartite