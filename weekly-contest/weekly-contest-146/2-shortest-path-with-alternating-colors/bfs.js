/**
 * 求最短路径，用BFS/层次遍历
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  // 邻接表（0表示红，1表示蓝）
  const adj = Array.from({ length: 2 }, () => Array.from({ length: n }, () => []))
  for (const [a, b] of redEdges) adj[0][a].push(b)
  for (const [a, b] of blueEdges) adj[1][a].push(b)

  const dist = Array.from({ length: 2 }, () => Array.from({ length: n }, () => Infinity)) // 0到各点的距离（区分颜色）
  dist[0][0] = dist[1][0] = 0
  let currQueue = []
  currQueue.push([0, 0]) // 从0出发，上一次走红路
  currQueue.push([0, 1]) // 从0出发，上一次走蓝路

  for (let level = 1; currQueue.length > 0; ++level) {
    const nextQueue = []
    for (const [i, currColor] of currQueue) {
      const nextColor = (currColor + 1) % 2
      for (const j of adj[nextColor][i]) {
        if (dist[nextColor][j] === Infinity) { // 如果还没有答案，则更新答案（最短）
          dist[nextColor][j] = level
          nextQueue.push([j, nextColor])
        }
      }
    }
    currQueue = nextQueue
  }

  const res = []
  for (let i = 0; i < n; ++i) {
    const tmp = Math.min(dist[0][i], dist[1][i])
    res.push(tmp === Infinity ? -1 : tmp)
  }
  return res
};

[
  [3, [[0,1],[1,2]], []],
  [3, [[0,1]], [[2,1]]],
  [3, [[1,0]], [[2,1]]],
  [3, [[0,1]], [[1,2]]],
  [3, [[0,1],[0,2]], [[1,0]]],
  [5, [[0,1],[1,2],[2,3],[3,4]], [[1,2],[2,3],[3,1]]],
].forEach(input => {
  console.log(shortestAlternatingPaths(...input))
})