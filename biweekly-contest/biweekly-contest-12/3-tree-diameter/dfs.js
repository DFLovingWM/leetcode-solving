/**
 * 两次DFS
 * 
 * 时间：96ms
 */
let farest
let maxDepth

var treeDiameter = function (edges) {
  const max = Math.max(...edges.map(([a, b]) => Math.max(a, b)))
  const n = max + 1
  const nexts = Array.from({ length: n }, () => [])
  for (const [a, b] of edges) {
    nexts[a].push(b)
    nexts[b].push(a)
  }
  
  farest = 0
  maxDepth = 0
  dfs(nexts, new Set(), 0, 0)
  dfs(nexts, new Set(), farest, 0)
  return maxDepth
};

function dfs (nexts, visit, curr, depth) {
  visit.add(curr)
  if (depth > maxDepth) {
    maxDepth = depth
    farest = curr
  }

  for (const next of nexts[curr]) {
    if (!visit.has(next)) {
      dfs(nexts, visit, next, depth + 1)
    }
  }
}

module.exports = treeDiameter