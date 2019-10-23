/**
 * 判断是否能构成二分图。BFS解法
 * 
 * 时间：144ms
 */
var possibleBipartition = function(n, dislikes) {
  const nexts = getNext(n, dislikes)
  const colors = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; ++i) {
    if (!colors[i] && !bfs(nexts, colors, i)) return false
  }
  return true
};

// 边转化为邻接表
function getNext (n, edges) {
  const nexts = new Array(n + 1).fill(0).map(() => [])
  for (const [a, b] of edges) {
    nexts[a].push(b)
    nexts[b].push(a)
  }
  return nexts
}

// 着色
function bfs (nexts, colors, start) {
  const queue = [start]
  colors[start] = 1

  while (queue.length > 0) {
    const i = queue.shift()

    for (const j of nexts[i]) {
      if (!colors[j]) {
        queue.push(j)
        colors[j] = -colors[i]
      } else if (colors[j] === colors[i]) {
        return false
      }
    }
  }

  return true
}

module.exports = possibleBipartition