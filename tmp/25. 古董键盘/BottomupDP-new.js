/**
 * 组合DP
 */
var keyboard = function(K, N) {
  // dp[n][j]：表示前`n`步中，使用了前`j`种字母
  const dp = Array.from({ length: N + 1 }, () => (
    Array.from({ length: 26 }, () => 0)
  ));
  for (let n = 1; n <= N; ++n) {
    for (let j = 0; j < 26; ++j) {
      for (let k)
    }
  }
};

// 求组合数
function C(n, k) { 
  // 分子
  let top = 1;
  for (let i = n; i >= n - k + 1; --i) {
    top *= i;
  }
  // 分母
  let bottom = 1;
  for (let j = k; j >= 1; --j) {
    bottom *= j;
  }
  return top / bottom;
}

module.exports = keyboard;
