/**
 * 拓扑排序(BFS)
 */
var canFinish = function(n, prerequisites) {
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
  let topoCount = 0
  while (!queue.empty()) {
    const cur = queue.pop()
    ++topoCount
    for (const to of getTo[cur]) {
      --inDegree[to]
      if (inDegree[to] === 0) {
        queue.push(to)
      }
    }
  }
  return topoCount === n
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
  [2, [[1,0],[0,1]]],
].forEach(input => {
  console.log(canFinish(...input))
})
