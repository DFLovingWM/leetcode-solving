/**
 * 贪心解法
 * 
 * 时间：O(N), 68ms
 */
var canCompleteCircuit = function (gas, cost) {
  let start = 0
  let sum = 0
  let acc = 0

  for (let i = 0; i < gas.length; ++i) {
    const delta = gas[i] - cost[i]
    sum += delta

    if (acc + delta < 0) { // 去不了
      start = i + 1 // 选下一个作为起点
      acc = 0
    } else {
      acc += delta
    }
  }

  return sum >= 0 ? start : -1
};

module.exports = canCompleteCircuit