/**
 * BFS
 * 
 * 时间：48ms
 */
var calcEquation = function(equations, values, queries) {

  // 建图
  function build () {
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

    return [nodeMap, nexts]
  }
  
  // 广搜
  function bfs (start, end, visit = new Set()) {
    let currQueue = [[start, 1]]

    while (currQueue.length > 0) {
      const nextQueue = []
      for (const [i, acc] of currQueue) {
        for (const [j, weight] of nexts[i]) {
          if (!visit.has(j)) {
            if (j === end) { // 到达终点
              return acc * weight
            }
            visit.add(j)
            nextQueue.push([j, acc * weight])
          }
        }
      }
      currQueue = nextQueue
    }

    return -1 // 无法到达终点
  }
  
  const [nodeMap, nexts] = build()
  const res = []
  for (let [a, b] of queries) {
    if (!nodeMap.has(a) || !nodeMap.has(b)) {
      res.push(-1)
    } else {
      a = nodeMap.get(a)
      b = nodeMap.get(b)
      res.push(bfs(a, b)) 
    }
  }
  return res
};

module.exports = calcEquation