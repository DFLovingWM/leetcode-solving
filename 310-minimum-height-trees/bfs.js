/**
 * 类似拓扑排序，BFS实现
 */
var findMinHeightTrees = function(n, edges) {
  if (n <= 2) {
    // Base case直接返回
    return Array.from({ length: n }, (_, index) => index)
  }

  const next = Array.from({ length: n }, () => []) // 邻接表
  const indeg = Array.from({ length: n }, () => 0) // 入度表
  for (const [a, b] of edges) {
    next[a].push(b)
    next[b].push(a)
    ++indeg[a]
    ++indeg[b]
  }

  const queue = new Queue()
  // 将入度最小（为1）的先加入队列，作为初始结点
  for (let i = 0; i < n; ++i) {
    if (indeg[i] === 1) {
      queue.push(new Node(i, 0))
    }
  }
  // 开始BFS
  let lastArr = [] // 保存最新一"级"的所有结点
  let lastLevel = 0
  while (!queue.empty()) {
    const from = queue.pop()

    // 处理本结点
    if (from.level === lastLevel) {
      lastArr.push(from.val)
    } else {
      lastLevel = from.level
      lastArr = [from.val]
    }

    // 拓展结点
    for (const to of next[from.val]) {
      --indeg[to]
      if (indeg[to] === 1) {
        queue.push(new Node(to, from.level + 1))
      }
    }
  }
  return lastArr
};

function Node (val, level) {
  this.val = val
  this.level = level
}

class Queue {
  constructor (arr = []) {
    this.arr = arr
  }

  size () {
    return this.arr.length
  }

  empty () {
    return this.size() === 0
  }

  push (x) {
    this.arr.push(x)
  }

  pop () {
    return this.arr.shift()
  }
}

[
  [4, [[1, 0], [1, 2], [1, 3]]],
  [6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]],
].forEach(input => {
  console.log(findMinHeightTrees(...input))
})