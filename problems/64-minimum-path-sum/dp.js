/**
 * 改头换面，与1、2一样的思路，只是dp数组的value不一样：
 * dp(i,j)表示到达位置(i,j)的最小价值路径，所以状态转移方程为：
 * dp(i,j) = Math.min( dp(i-1,j), dp(i,j-1) ) + grid(i,j)
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let [rowCount, columnCount] = [grid.length, grid[0].length]
  let dp = createTwoDimenArray(rowCount, columnCount)

  // 初始化
  dp[0][0] = grid[0][0]
  for (let i = 1; i < rowCount; ++i) {
    dp[i][0] = grid[i][0] + dp[i - 1][0]
  }
  for (let i = 1; i < columnCount; ++i) {
    dp[0][i] = grid[0][i] + dp[0][i - 1]
  }

  // Ickso~!
  for (let i = 1; i < rowCount; ++i) {
    for (let j = 1; j < columnCount; ++j) {
      dp[i][j] = grid[i][j] + Math.min( dp[i - 1][j], dp[i][j - 1] ) // 状态转移方程
    }
  }

  console.log(dp)

  return dp[rowCount - 1][columnCount - 1]
}

function createTwoDimenArray (rowCount, columnCount, initialVal = 0) {
  return Array.from({ length: rowCount }, () => {
    return Array.from({ length: columnCount }, () => {
      return initialVal
    })
  })
}