/**
 * 贪心：
 * 每天都买入，当天或下一天卖出。
 * 或者说，看每两天，只要(i+1)比i贵，就在i买进来。
 * 
 * 时间：O(N), 76ms
 */
var maxProfit = function (prices) {
  let earn = 0

  for (let i = 0; i < prices.length - 1; ++i) {
    if (prices[i + 1] > prices[i]) {
      earn += prices[i + 1] - prices[i]
    }
  }

  return earn
};

[
  [7,1,5,3,6,4],
  [1,2,3,4,5],
  [7,6,4,3,1],
].forEach(arr => {
  console.log(maxProfit(arr))
})