/**
 * 两次BFS
 * 
 * 时间：92ms
 */
var treeDiameter = function (edges) {
  const max = Math.max(...edges.map(([a, b]) => Math.max(a, b)))
  const n = max + 1
  const nexts = Array.from({ length: n }, () => [])
  for (const [a, b] of edges) {
    nexts[a].push(b)
    nexts[b].push(a)
  }
  const end = bfs(nexts, 0)[1]
  return bfs(nexts, end)[0]
};

function bfs (nexts, start) {
  let currQueue = []
  currQueue.push(start)
  const visit = new Set()
  visit.add(start)

  let level = 0
  let end = currQueue[0]

  while (true) {
    const nextQueue = []
    for (const i of currQueue) {
      for (const j of nexts[i]) {
        if (!visit.has(j)) {
          visit.add(j)
          nextQueue.push(j)
        }
      }
    }

    if (nextQueue.length === 0) break
    currQueue = nextQueue
    end = currQueue[0]
    ++level
  }

  return [level, end]
}

module.exports = treeDiameter