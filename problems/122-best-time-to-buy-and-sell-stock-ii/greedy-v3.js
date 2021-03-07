/**
 * 贪心：定位每个递增区间
 */
var maxProfit = function(prices) {
  const n = prices.length;
  let res = 0;
  let [l, r] = [0, 0]; // 当前区间的左、右边界

  while (r + 1 < n) {
    if (prices[r + 1] >= prices[r]) { // 如果上升，则继续扩展右边界
      ++r;
    } else { // 如果下降，则结算旧区间后，确定新的区间
      res += prices[r] - prices[l];
      ++r;
      l = r;
    }
  }
  // 别忘了结算最后一个区间
  res += prices[r] - prices[l];

  return res;
};