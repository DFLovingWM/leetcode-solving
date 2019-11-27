/**
 * DP + 状态位压缩
 * 
 * 时间：`O(N * M * 2^M)`, 92ms
 */
var assignBikes = function (workers, bikes) {
  const cache = new Map()

  // 递归函数：当前需要给第`wi`个工人配单车、单车占用情况为`bikeSet`(二进制)，最终得到的最小代价
  // 回溯思想：对于每一个工人，将可用的单车都尝试分配给他，看哪个代价最小
  function helper (wi, bikeSet) {
    if (wi === workers.length) return 0
    
    const key = `${wi},${bikeSet}`
    if (cache.has(key)) return cache.get(key)

    let minCost = Infinity
    for (let i = 0, mask = 1; i < bikes.length; ++i, mask = mask << 1) {
      if (!(bikeSet & mask)) { // 该位上是`0`表示单车未被占用（可用）
        const currCost = manhattan(...workers[wi], ...bikes[i]) + helper(wi + 1, bikeSet | mask)
        minCost = Math.min(minCost, currCost)
      }
    }
    cache.set(key, minCost)
    return minCost
  }

  return helper(0, 0)
};

function manhattan (x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}

module.exports = assignBikes