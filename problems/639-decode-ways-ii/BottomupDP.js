/**
 * Bottom-up DP
 * 
 * 时间：O(N), 408ms
 * 空间：O(N)
 */
var numDecodings = function (s) {
  const MOD = 1e9 + 7;
  const n = s.length;
  // dp[i]表示前`i`个字母的解码总数
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[0] = 1;

  for (let i = 1; i <= n; ++i) {
    const curr = s[i - 1];

    if (curr === '*') { // *
      // 策略1：单独时，*能取1~9
      dp[i] += dp[i - 1] * 9;
      dp[i] %= MOD;

      // 策略2：与上一个数字连接
      if (i - 2 >= 0) {
        const prev = s[i - 2];
        if (prev === '1') { // 1*，*能取1~9
          dp[i] += dp[i - 2] * 9;
        } else if (prev === '2') { // 2*，*能取1~6
          dp[i] += dp[i - 2] * 6;
        } else if (prev === '*') { // **，为11~19、21~26
          dp[i] += dp[i - 2] * 15;
        }
        dp[i] %= MOD;
      }
    } else { // 数字
      // 策略1：单独
      if (curr !== '0') {
        dp[i] += dp[i - 1];
        dp[i] %= MOD;
      }

      // 策略2：与上一个数字连接
      if (i - 2 >= 0) {
        const prev = s[i - 2];
        if ('12'.includes(prev)) { // 1*或2*，只要在范围内就算1个
          const n = Number(prev + curr);
          if (n >= 10 && n <= 26) {
            dp[i] += dp[i - 2];
            dp[i] %= MOD;
          }
        } else if (prev === '*') { // *作为十位数，只有1(0~9)、2(0~6)。即0~6有2个，7~9只有1个
          const c = Number(curr);
          if (c >= 0 && c <= 6) {
            dp[i] += dp[i - 2] * 2;
          } else {
            dp[i] += dp[i - 2];
          }
          dp[i] %= MOD;
        }
      }
    }
  }
  // console.log(dp)
  return dp[n];
};

module.exports = numDecodings;