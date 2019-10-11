/**
 * 信封即节点，套即有向边(权重为1)，构成有向无环图(DAG)。然后求最长路径
 * 可以用拓扑排序求
 * 参考：https://leetcode-cn.com/problems/russian-doll-envelopes/solution/c-zhuan-hua-wei-you-xiang-tu-de-zui-chang-lu-jing-/
 * 
 * 时间：O(N^2)，主要处理边, 1560ms
 */
var maxEnvelopes = function (envelopes) {
  const n = envelopes.length
  const nexts = Array.from({ length: n }, () => []) // 邻接表
  const inDegree = Array.from({ length: n }, () => 0) // 入度表
  const dist = Array.from({ length: n }, () => 0)
  const queue = new Queue() // 拓扑排序队列

  // 边
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (canTao(envelopes[i], envelopes[j])) { // i到j有权重为1的边
        nexts[i].push(j)
        ++inDegree[j]
      }
    }
  }

  // 入度为0的节点，作为初始节点
  for (let i = 0; i < n; ++i) {
    if (inDegree[i] === 0) {
      queue.push(i)
      dist[i] = 1 // 初始距离为1
    }
  }

  while (!queue.empty()) {
    const i = queue.popFront()

    for (const j of nexts[i]) {
      --inDegree[j]
      dist[j] = Math.max(dist[j], dist[i] + 1)

      if (inDegree[j] === 0) {
        queue.push(j)
      }
    }
  }

  return Math.max(0, ...dist) // 返回最长路径
};

module.exports = maxEnvelopes

function canTao (e1, e2) {
  return e1[0] < e2[0] && e1[1] < e2[1]
}

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
