/**
 * Accepted:
 * - Time: 88ms, O(N)
 * - Memory: 17.4MB, O(1)
 */
function maxProfit (prices) {
  let minPrice = Infinity,
      maxProfit = 0

  for (const price of prices) {
    maxProfit = Math.max(maxProfit, price - minPrice)
    minPrice = Math.min(minPrice, price)
  }

  return maxProfit
}

module.exports = maxProfit