const BASE_HP = 1

/**
 * dp(i,j)表示：如果想要到达终点，则到(i,j)这个位置必须(至少)拥有的血量
 * 
 * [84ms]
 * 
 * @param {number[][]} dungeon 迷宫
 * @return {number} 从起点到终点，至少拥有的血量
 */
var calculateMinimumHP = function(dungeon) {
  let [rowCount, colCount] = [dungeon.length, dungeon[0].length]

  let dp = createTwoDimenArray(rowCount, colCount, Infinity)
  dp[rowCount][colCount - 1] = dp[rowCount - 1][colCount] = BASE_HP // 非法位置，作为dummy

  // 逆序（从终点到起点遍历）
  for (let r = rowCount - 1; r >= 0; --r) {
    for (let c = colCount - 1; c >= 0; --c) {
      let temp = Math.min(dp[r + 1][c], dp[r][c + 1]) - dungeon[r][c]
      if (temp <= 0) { // 到该位置前是负或0血量都行，说明只需要基本血量(1滴血)就可以了
        dp[r][c] = BASE_HP
      } else { // 否则就设置为该血量
        dp[r][c] = temp
      }
    }
  }

  return dp[0][0]
}

function createTwoDimenArray (rowCount, columnCount, initialVal = 0) {
  return Array.from({ length: rowCount + 1 }, () => {
    return Array.from({ length: columnCount + 1 }, () => {
      return initialVal
    })
  })
}

module.exports = calculateMinimumHP