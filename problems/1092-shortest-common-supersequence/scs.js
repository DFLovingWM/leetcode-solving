/**
 * DP求SCS长度，然后构造
 * 
 * 时间：`O(N^2)`, 244ms
 */
var shortestCommonSupersequence = function (A, B) {
  const alen = A.length, blen = B.length

  // dp[i][j]表示A[:i]和B[:j]的SCS长度
  const dp = Array.from({ length: alen + 1 }, () => Array.from({ length: blen + 1 }, () => 0))
  for (let i = 0; i <= alen; ++i) {
    for (let j = 0; j <= blen; ++j) {
      if (i === 0) { // 初始化
        dp[i][j] = j
      } else if (j === 0) { // 初始化
        dp[i][j] = i
      } else if (A[i - 1] === B[j - 1]) { // 相等时，加1个相同字符
        dp[i][j] = 1 + dp[i - 1][j - 1]
      } else { // 不相等时，取更短的，然后加1个字符
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  // 逆向构造SCS
  const scs = []
  let i = alen, j = blen

  while (i > 0 && j > 0) {
    if (A[i - 1] === B[j - 1]) { // 相等时，就挑这个字符
      scs.push(A[i - 1])
      --i
      --j
    } else {
      scs.push(dp[i - 1][j] < dp[i][j - 1] ? A[--i] : B[--j])
    }
  }
  // 剩余的字符
  for (; i > 0; --i) scs.push(A[i - 1])
  for (; j > 0; --j) scs.push(B[j - 1])

  return scs.reverse().join('')
};

module.exports = shortestCommonSupersequence;