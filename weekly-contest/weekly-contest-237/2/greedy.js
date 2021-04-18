/**
 * 贪心，使用排序
 */
var maxIceCream = function(costs, coins) {
  costs.sort((a, b) => a - b);
  let i;
  for (i = 0; i < costs.length; ++i) {
    if (coins >= costs[i]) {
      coins -= costs[i];
    } else {
      break;
    }
  }
  return i;
};