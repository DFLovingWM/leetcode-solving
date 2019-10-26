/**
 * Bottom-up DP: 省空间版本
 * 
 * 时间：O(N)
 * 空间：O(1)
 */
var minCostClimbingStairs = function (costs) {
  let [a, b] = [costs[0], costs[1]]

  for (let i = 2; i < costs.length; ++i) {
    const c = Math.min(a, b) + costs[i];
    [a, b] = [b, c]
  }

  return Math.min(a, b)
};

module.exports = minCostClimbingStairs