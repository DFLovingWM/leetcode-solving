/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
  const count = Array.from({ length: n }, () => 0)
  const edges = Array.from({ length: n }, () => [])

  for (const [a, b] of connections) {
    ++count[a]
    ++count[b]
    edges[a].push(b)
    edges[b].push(a)
  }
  
  const res = []
  for (let i = 0; i < n; ++i) {
    if (count[i] === 1) {
      for (const j of edges[i]) {
        res.push([i, j])
      }
    }
  }
  return res
};

[
  [4, [[0,1],[1,2],[2,0],[1,3]]],
  [3, [[0,1],[1,2],[2,0]]],
].forEach(input => {
  console.log(criticalConnections(...input))
})