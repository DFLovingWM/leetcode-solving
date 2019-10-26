/**
 * 头尾双指针（start闭end开）：可行时end+1，不可行时start-1
 * 参考：https://leetcode.com/problems/gas-station/discuss/42565/My-AC-is-O(1)-space-O(n)-running-time-solution.-Does-anybody-have-posted-this-solution
 * 
 * 时间：O(N), 68ms
 */
var canCompleteCircuit = function (gas, cost) {
  const n = gas.length
  const delta = []
  for (let i = 0; i < n; ++i) {
    delta.push(gas[i] - cost[i])
  }

  let start = n - 1 // start(闭)表示当前起点
  let end = 0 // end(开)代表将要扩展的点
  let sum = delta[start] // 当前油量

  while (end < start) {
    if (sum < 0) {
      // 当前start走不到这个end，则改为从(start-1)出发
      --start
      sum += delta[start]
    } else {
      // 当前start能走到这个end，则看能否走得更远
      sum += delta[end]
      ++end
    }
  }

  return sum >= 0 ? start : -1
};

module.exports = canCompleteCircuit