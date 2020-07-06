/**
 * 完全背包问题 + 路径溯源
 */
var largestNumber = function(costs, target) {
  // DP求最大字符串的长度
  const dp = Array.from({ length: target + 1 }, () => -Infinity); // 记录长度
  dp[0] = true;
  for (let i = 0; i <= target; ++i) {
    for (let j = 1; j <= 9; ++j) {
      const c = costs[j - 1];
      if (i >= c) {
        dp[i] = Math.max(dp[i], dp[i - c] + 1);
      }
    }
  }
// console.log(dp[target]);
  // 还原最大字符串
  if (dp[target] === -Infinity) return '0';
  let res = '';
  let money = target;
  // 不断循环，每次取1种数字
  while (money) {
    // 贪心，从9～1
    for (let i = 9; i >= 1; --i) {
      const nextMoney = money - costs[i - 1];
      if (nextMoney >= 0 && dp[money] === dp[nextMoney] + 1) { // 可行
        money = nextMoney;
        res += i;
        break;
      }
    }
  }
  return res;
};

module.exports = largestNumber;
