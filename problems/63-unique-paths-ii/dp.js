/**
 * [80ms]
 * 跟62(版本1)一样的思想，唯一不同的是，当初始化和迭代的时候，需要对obstacle特殊处理：
 * 1. 如果是obstacle，则dp为0
 * 2. 否则就正常计算
 * 
 * @param {number[][]} obstacleGrid 迷宫
 * @return {number} 目标的路径数
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let [rowCount, columnCount] = [obstacleGrid.length, obstacleGrid[0].length];
  let dp = createTwoDimenArray(rowCount, columnCount)
  let k

  // 初始化
  for (k = 0; k < rowCount && obstacleGrid[k][0] === 0; ++k) dp[k][0] = 1
  for (; k < rowCount; ++k) dp[k][0] = 0
  for (k = 0; k < columnCount && obstacleGrid[0][k] === 0; ++k) dp[0][k] = 1
  for (; k < columnCount; ++k) dp[0][k] = 0

  // 开始迭代
  for (let i = 1; i < rowCount; ++i) {
    for (let j = 1; j < columnCount; ++j) {
      if (obstacleGrid[i][j] === 1) { // 如果此处有障碍，可以设其路径数为0(以影响后面的位置)
        dp[i][j] = 0
      } else { // 如果是空位，就正常计算
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
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