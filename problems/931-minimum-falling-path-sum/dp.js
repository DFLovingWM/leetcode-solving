/**
 * Top-down DP:
 * dp(i, j) denotes the minimum arriving at position (i, j), so we have state transition equation like this:
 * dp(i, j) = arr(i, j) + min( dp(i-1, j-1), dp(i-1, j), dp(i-1, j+1) )
 * 
 * @param {number[][]} arr
 * @return {number}
 */
var minFallingPathSum = function (arr) {
  const [rowCount, colCount] = [arr.length, arr[0].length]

  const dp = createTwoDimenArray(rowCount + 1, colCount + 2, Infinity)
  dp[0].fill(0) // dummy row

  for (let r = 1; r <= rowCount; ++r) {
    for (let c = 1; c <= colCount; ++c) {
      dp[r][c] = arr[r - 1][c - 1] + Math.min( // State transform
        dp[r - 1][c - 1],
        dp[r - 1][c],
        dp[r - 1][c + 1]
      )
    }
  }

  // Find [min] in the bottom row
  return Math.min(...dp[rowCount])
}

function createTwoDimenArray (rowCount, columnCount, initialVal = 0) {
  return Array.from({ length: rowCount }, () => {
    return Array.from({ length: columnCount }, () => {
      return initialVal
    })
  })
}

module.exports = minFallingPathSum