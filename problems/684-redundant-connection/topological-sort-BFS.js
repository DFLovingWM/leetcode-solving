/**
 * 拓扑排序（BFS法）
 */
var findRedundantConnection = function(edges) {
  const n = edges.length
  const inDegree = Array.from({ length: n }, () => 0) // 入度表
  const next = Array.from({ length: n }, () => []) // 邻接表
  for (let [a, b] of edges) {
    --a
    --b
    ++inDegree[a]
    ++inDegree[b]
    next[a].push(b)
    next[b].push(a)
  }

  const queue = new Queue()
  for (let i = 0; i < n; ++i) { // 入度为1，作为BFS的初始结点
    if (inDegree[i] === 1) {
      queue.push(i)
    }
  }

  while (!queue.empty()) {
    const i = queue.pop()
    --inDegree[i]
    for (const j of next[i]) {
      --inDegree[j]
      if (inDegree[j] === 1) {
        queue.push(j)
      }
    }
  }

  // 检查剩余的结点
  const rest = new Set()
  for (let i = 0; i < n; ++i) {
    if (inDegree[i] > 1) {
      rest.add(i)
    }
  }
  
  let res
  for (let i = edges.length - 1; i >= 0; --i) {
    let [a, b] = edges[i]
    --a
    --b
    if (rest.has(a) && rest.has(b)) {
      res = [a + 1, b + 1]
      break
    }
  }
  return res
};

class Queue {
  constructor (arr = []) {
    this.arr = arr
  }

  empty () {
    return this.arr.length === 0
  }

  size () {
    return this.arr.length
  }

  push (x) {
    this.arr.push(x)
  }

  pop () {
    return this.arr.shift()
  }
}

[
  [[1,2], [1,3], [2,3]],
  [[1,2], [2,3], [3,4], [1,4], [1,5]],
].forEach(edges => {
  console.log(findRedundantConnection(edges))
})
