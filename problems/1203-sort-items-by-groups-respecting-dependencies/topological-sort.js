/**
 * 拓扑排序 + 并查集
 */
var sortItems = function(projectCount, groupCount, project2Group, beforeItems) {
  const next = Array.from({ length: projectCount }, () => [])
  const indeg = Array.from({ length: projectCount }, () => 0)
  for (let i = 0; i < beforeItems.length; ++i) {
    const after = i
    for (const before of beforeItems[i]) {
      next[before].push(after)
      ++indeg[after]
    }
  }

  const res = []
  const queue = new Queue()
  for (let i = 0; i < projectCount; ++i) {
    if (indeg[i] === 0) {
      queue.push(i)
    }
  }
  while (!queue.empty()) {
    const i = queue.popFront()
      

    for (const j of next[i]) {
      --indeg[j]
      if (indeg[j] === 0) {
        queue.push(j)
      }
    }
  }
};

// 队列
class Queue {
  constructor (arr = []) {
    this.arr = arr
  }

  size () {
    return this.arr.length
  }

  empty () {
    return this.arr.length === 0
  }

  push (x) {
    this.arr.push(x)
  }

  popFront () {
    return this.arr.shift()
  }
}