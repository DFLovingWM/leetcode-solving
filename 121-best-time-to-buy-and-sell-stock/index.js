/**
 * 思路：一遍扫描，记录`min`，同时找到最大的`n-min`
 */
function maxProfit (prices) {
  let min = prices[0], result = 0
  for (let i = 1; i < prices.length; ++i) {
    result = Math.max(result, prices[i] - min)
    min = Math.min(min, prices[i])
  }
  return result
}

[
  [[7,1,5,3,6,4]],
  [[7,6,4,3,1]]
].forEach(input => {
  console.log(maxProfit(...input))
})