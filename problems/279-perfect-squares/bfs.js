/**
 * BFS：求最短路径
 * 
 * 时间：128ms
 */
var numSquares = function (n) {
  let queue = []
  const visit = new Set()

  // 初始结点：0
  queue.push(0)
  visit.add(0)

  for (let level = 0; true; ++level) { // 层次遍历
    const nextQueue = []
    for (const curr of queue) { // 遍历本层结点
      for (let i = 1; curr + i * i <= n; ++i) { // 探索下一层结点
        const next = curr + i * i
        if (next === n) return level + 1 // 遇到n，可以结束了，迭代的层数就是最短路径（答案）
        if (!visit.has(next)) {
          visit.add(next)
          nextQueue.push(next)
        }
      }
    }
    queue = nextQueue
  }
};

module.exports = numSquares