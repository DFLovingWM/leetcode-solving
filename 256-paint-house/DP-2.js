/**
 * 动态规划：思路一样，这是空间优化版本
 * 
 * 时间：O(9N)=O(N)
 * 空间：O(3)=O(1)
 */
var minCost = function(costs) {
  const length = costs.length
  if (!length) return 0

  let [red, green, blue] = [0, 0, 0]
  for (const [r, g, b] of costs) {
    let nextRed = Math.min(green, blue) + r
    let nextGreen = Math.min(red, blue) + g
    let nextBlue = Math.min(red, green) + b;
    [red, green, blue] = [nextRed, nextGreen, nextBlue]
  }
  return Math.min(red, green, blue)
};
