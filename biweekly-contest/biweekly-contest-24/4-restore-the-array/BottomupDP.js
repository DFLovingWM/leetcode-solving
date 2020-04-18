/**
 * Bottom-up DP
 */
var numberOfArrays = function(s, k) {
  const MOD = 1e9 + 7;
  const n = s.length;
  // dp[i]表示前`i`个字符的方案数
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[0] = 1;
  for (let i = 1; i <= n; ++i) {
    for (let j = Math.max(0, i - 10); j < i; ++j) {
      // 不能是前导0，而且增加的数字在k之内
      if (s[j] !== '0' && Number(s.slice(j, i)) <= k) {
        dp[i] += dp[j];
        dp[i] %= MOD;
      }
    }
  }
  return dp[n];
};

module.exports = numberOfArrays;