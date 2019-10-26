/**
 * dp(i,j) denotes Alex's max score at position (i,j)
 */
function stoneGame (piles) {
  let length = piles.length,
      dp = createTwoDimenArray(length, length, 0)

  for (let size = 1; size <= length; ++size) {
    for (let L = 0; L < length; ++L) {
      let R = L + size - 1
      if ((L + R) % 2 === 1) { // Alex's turn
        dp[L][R] = Math.max(dp[L + 1][R] + piles[L], dp[L][R - 1] + piles[R])
      } else { // Lee's turn
        dp[L][R] = Math.max(dp[L + 1][R] - piles[L], dp[L][R - 1] - piles[R])
      }
    }
  }

  return dp[0][length - 1] > 0 // Bigger than 0 means Alex wins
}

function createTwoDimenArray (rowCount, columnCount, initialVal = 0) {
  return Array.from({ length: rowCount }, () => {
    return Array.from({ length: columnCount }, () => {
      return initialVal
    })
  })
}

module.exports = stoneGame