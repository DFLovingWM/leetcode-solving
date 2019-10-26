/**
 * 暴力解法
 * 
 * 时间：O(N^2), 152ms
 */
var canCompleteCircuit = function (gas, cost) {
  const deltas = []
  const n = gas.length

  for (let i = 0; i < n; ++i) {
    deltas.push(gas[i] - cost[i])
  }

  for (let start = 0; start < n; ++start) {
    if (deltas[start] >= 0) {
      let sum = 0
      for (let i = start; i < start + n; ++i) {
        sum += deltas[i % n]
        if (sum < 0) break
      }
      if (sum >= 0) return start
    }
  }

  return -1
};

module.exports = canCompleteCircuit