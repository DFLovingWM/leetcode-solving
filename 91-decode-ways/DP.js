/**
 * 动态规划：设dp[i]表示前i个字符的解码数
 * 时间：O(N), 84ms
 * 空间：O(N), 35.8MB
 */
var numDecodings = function(s) {
  if (s.length === 0 || s[0] === '0') return 0

  const n = s.length
  const dp = Array.from({ length: n + 1 }, () => 0)
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; ++i) {
    const one = Number(s[i - 1]) // 当前字符
    if (one >= 1 && one <= 9) {
      dp[i] += dp[i - 1]
    }

    const two = Number(s[i - 2] + s[i - 1]) // 当前字符加上前一个字符
    if (two >= 10 && two <= 26) {
      dp[i] += dp[i - 2]
    }

    if (dp[i] === 0) break // 不合法情况，后面也不用看了，整个返回0
  }

  return dp[n]
};

[
  '100', // 0
  // '', // 0
  // '0', // 0
  // '0123', // 0
  // '12', // 2
  // '190', // 2
  // '226', // 3
].forEach(s => {
  console.log(numDecodings(s))
})