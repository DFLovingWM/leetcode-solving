/**
 * 基本DP：
 * dp(i,j)表示到达(i, j)这个位置的路径数
 * 因为只能向右、向下走，所以对于dp(i, j)来说，状态转移方程就是：
 * dp(i, j) = dp(i-1, j) + dp(i, j-1)
 * 即(i, j)的路径数为左边和上边格子的路径总数。
 * 
 * [60ms]
 * 
 * @param {number} columnCount 列数
 * @param {number} rowCount 行数
 * @return {number} 目标位置的路径数
 */
var uniquePaths = function (columnCount, rowCount) {
  let dp = createTwoDimenArray(rowCount, columnCount)

  // 初始化
  for (let row = 1; row <= rowCount; ++row) { // 第一列所有位置设为1
    dp[row][1] = 1
  }
  for(let col = 1; col <= columnCount; ++col) { // 第一行所有位置设为1
    dp[1][col] = 1
  }

  // 开始迭代
  for (let row = 2; row <= rowCount; ++row) {
    for (let col = 2; col <= columnCount; ++col) {
      dp[row][col] = dp[row][col - 1] + dp[row - 1][col]
    }
  }

  // 目标位置(右下角)
  return dp[rowCount][columnCount]
}

function createTwoDimenArray (rowCount, columnCount) {
  return Array.from({ length: rowCount + 1 }, () => {
    return Array.from({ length: columnCount + 1 }, () => {
      return 0
    })
  })
}

module.exports = uniquePaths