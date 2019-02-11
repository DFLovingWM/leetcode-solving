/**
 * "Peak-Valley" method
 * - Time: O(N), 76ms
 * - Space: O(1)
 */
function maxProfit (prices) {
  let L = 0, R = L,
      length = prices.length,
      segments = []

  while (R < length) {
    while (R < length && prices[R + 1] >= prices[R]) // Non-decreasing
      ++R

    segments.push(prices[R] - prices[L])
    L = ++R
  }

  // console.log(segments)

  return segments.reduce((sum, item) => sum + item, 0)
}

module.exports = maxProfit