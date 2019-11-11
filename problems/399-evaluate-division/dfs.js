/**
 * 图 + DFS
 */
var calcEquation = function(equations, values, queries) {
  const nodeMap = new Map() // 字母 => 数字
  let counter = 0
  for (const [a, b] of equations) {
    if (!nodeMap.has(a)) {
      nodeMap.set(a, counter++)
    }
    if (!nodeMap.has(b)) {
      nodeMap.set(b, counter++)
    }
  }
  const nodeCount = counter // 结点数
  
  const nexts = Array.from({ length: nodeCount }, () => []) // 邻接表
  for (let i = 0; i < equations.length; ++i) {
    const a = nodeMap.get(equations[i][0])
    const b = nodeMap.get(equations[i][1])
    const weight = values[i]
    // 双向带权边
    nexts[a].push([b, weight])
    nexts[b].push([a, 1 / weight])
  }
  
  function dfs (from, to, visit = new Set()) {
    if (from === to) return 1
    
    visit.add(from)
    for (const [next, weight] of nexts[from]) {
      if (!visit.has(next)) {
        const candidate = weight * dfs(next, to, visit)
        if (candidate !== 0) return candidate
      }
    }
    return 0 // 表示走不到
  }
  
  const res = []
  for (let [a, b] of queries) {
    if (!nodeMap.has(a) || !nodeMap.has(b)) {
      res.push(-1)
    } else {
      a = nodeMap.get(a)
      b = nodeMap.get(b)
      res.push(dfs(a, b) || -1) 
    }
  }
  return res
};