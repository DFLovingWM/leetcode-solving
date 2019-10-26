/**
 * 拓扑排序(BFS)
 */
var findOrder = function(n, prerequisites) {
  const queue = new Queue()
  const inDegree = Array.from({ length: n }, () => 0)
  const getTo = Array.from({ length: n }, () => [])

  // 准备工作
  for (const [to, from] of prerequisites) {
    ++inDegree[to]
    getTo[from].push(to)
  }

  // 将入度为0的加入队列，作为BFS的初始结点
  for (let i = 0; i < n; ++i) {
    if (inDegree[i] === 0) {
      queue.push(i)
    }
  }

  let topologicalOrder = []
  while (!queue.empty()) {
    const cur = queue.pop()
    topologicalOrder.push(cur)
    for (const to of getTo[cur]) {
      --inDegree[to]
      if (inDegree[to] === 0) {
        queue.push(to)
      }
    }
  }

  return topologicalOrder.length === n ? topologicalOrder : []
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

  front () {
    return this.arr[0]
  }
}

[
  [2, [[1,0]]],
  [4, [[1,0],[2,0],[3,1],[3,2]]],
  [3, [[1,0],[1,2],[0,1]]],
].forEach(input => {
  console.log(findOrder(...input))
})
