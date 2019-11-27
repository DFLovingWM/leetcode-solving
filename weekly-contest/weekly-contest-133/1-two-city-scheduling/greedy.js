/**
 * 排序：先全部选A，然后派一半到B
 * 
 * 时间：`O(NlogN)`, 68ms
 */
var twoCitySchedCost = function (costs) {
  costs.sort((U, V) => (U[1] - U[0]) - (V[1] - V[0]))
  const n = costs.length / 2
  let res = 0

  // 全部去A
  for (let i = n * 2 - 1; i >= 0; --i) {
    res += costs[i][0]
  }

  // 派去B
  for (let i = 0; i < n; ++i) {
    res = res - costs[i][0] + costs[i][1]
  }

  return res
};

module.exports = twoCitySchedCost