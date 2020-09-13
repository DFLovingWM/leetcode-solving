/**
 * DP
 * 
 * 时间：O(N), 416ms
 * 空间：O(N), 74MB
 */
var numOfSubarrays = function(arr) {
  const n = arr.length;
  const MOD = 1e9 + 7;
  // dp[i][0/1]：表示以`arr[i]`结尾，和为偶/奇的子数组个数
  const dp = Array.from({ length: n + 1 }, () => [0, 0]);
  let res = 0;

  for (let i = 1; i <= n; ++i) {
    if (arr[i - 1] & 1) { // 奇
      dp[i][1] = dp[i - 1][0] + 1;
      dp[i][0] = dp[i - 1][1];
    } else { // 偶
      dp[i][1] = dp[i - 1][1];
      dp[i][0] = dp[i - 1][0] + 1;
    }
    res += dp[i][1];
    res %= MOD;
  }

  return res;
};

module.exports = numOfSubarrays;