/**
 * 求欧拉通路（结点可以经过N次，但每条边只能走1次。所以需要标记边）
 * DFS
 * 时间：196ms，击败100%哦
 */
let res

var findItinerary = function(tickets) {
  const [nodes, nodeMap] = makeNodes(tickets) // 结点列表
  const n = nodes.length
  const next = Array.from({ length: n }, () => []) // 邻接表
  for (const [portA, portB] of tickets) {
    const a = nodeMap.get(portA)
    const b = nodeMap.get(portB)
    next[a].push(new Edge(b)) // 单向
  }

  for (const edges of next.values()) { // 排序，让字母序小的在前面，先遍历
    edges.sort((a, b) => {
      if (nodes[a.j] < nodes[b.j]) return -1
      else if (nodes[a.j] > nodes[b.j]) return 1
      return 0
    })
  }

  const start = nodeMap.get('JFK') // 开始结点
  res = []
  dfs(start, tickets.length + 1, nodes, nodeMap, next, [])
  return res
};

// 邻接表的结点
function Edge (j, visited = false) {
  this.j = j // 另一端点
  this.visited = visited // 标记该路径是否走过
}

// 将机场名映射为下标（结点）
function makeNodes (edges) {
  let nodes = new Set()
  for (const [a, b] of edges) {
    nodes.add(a)
    nodes.add(b)
  }
  nodes = Array.from(nodes)
  const nodeMap = new Map()
  for (let i = 0; i < nodes.length; ++i) {
    nodeMap.set(nodes[i], i)
  }
  return [nodes, nodeMap]
}

// 深搜
function dfs (i, pathLength, nodes, nodeMap, next, path) {
  path.push(nodes[i])

  if (path.length === pathLength) { // 终止条件：如果能走完所有的边
    res = path
    return
  }

  for (const edge of next[i].values()) {
    if (!edge.visited) { // 如果没走过
      edge.visited = true
      dfs(edge.j, pathLength, nodes, nodeMap, next, path)

      // 回溯
      edge.visited = false

      // 剪枝：找到一条路就不必继续玩了
      if (res.length) return
    }
  }
  path.pop()
}

[
  [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]],
  [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]],
  [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]],
].forEach(ts => {
  console.log(findItinerary(ts))
})
