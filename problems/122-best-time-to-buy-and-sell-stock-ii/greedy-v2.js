/**
 * 贪心：只需要看相邻点构成的区间
 */
var maxProfit = function(prices) {
  let res = 0;
  for (let i = 1; i < prices.length; ++i) {
    if (prices[i] > prices[i - 1]) { // 如果相邻区间为上升
      res += prices[i] - prices[i - 1];
    } 
  }
  return res;
};