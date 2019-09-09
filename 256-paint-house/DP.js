/**
 * 动态规划：dp[i][color]表示第i个房子刷color的(总)最低费用
 * 
 * 时间：O(9N)=O(N)
 * 空间：O(3N)=O(N)
 */
var minCost = function(costs) {
  const length = costs.length
  if (!length) return 0

  const dp = Array.from({ length }, () => {
    return Array.from({ length: 3 }, () => {
      return Infinity
    })
  })
  dp[0] = costs[0]

  for (let i = 1; i < length; ++i) { // 房子
    for (let thisColor = 0; thisColor < 3; ++thisColor) { // 该房子的颜色
      // 找出（不同颜色的）上一个房子的最小代价
      // 这一步需要O(K)=O(3)遍历，其实可以优化
      let min = Infinity
      for (let lastColor = 0; lastColor < 3; ++lastColor) { // 上一个房子的颜色
        if (lastColor !== thisColor) {
          min = Math.min(min, dp[i - 1][lastColor])
        }
      }
      dp[i][thisColor] = min + costs[i][thisColor]
    }
  }

  return Math.min(...dp[length - 1])
};

[
  [],
  [[17,2,17],[16,16,5],[14,3,19]],
  [[8,12,18],[14,6,8],[10,9,13],[2,17,14],[18,18,6],[2,1,15],[19,20,2],[18,15,16],[20,18,18],[15,10,10],[2,20,18],[14,5,15],[18,10,12],[9,17,19],[9,1,6],[4,4,10],[7,8,15],[16,17,4],[16,16,13],[12,7,10],[14,13,8],[16,6,18],[10,5,10],[3,5,11],[9,9,6],[10,15,19],[4,5,19],[12,17,17]],
].forEach(costs => {
  console.log(minCost(costs))
})
