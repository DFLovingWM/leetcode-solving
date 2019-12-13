/**
 * DP求LCS
 * 
 * 时间：`O(N^2)`, 248ms
 */
var shortestCommonSupersequence = function (A, B) {
  const aLen = A.length, bLen = B.length

  // dp[i][j]表示A[:i]与B[:j]的LCS长度
  const dp = Array.from({ length: aLen + 1 }, () => Array.from({ length: bLen + 1 }, () => 0))
  // 迭代求LCS长度
  for (let i = 1; i <= aLen; ++i) {
    for (let j = 1; j <= bLen; ++j) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  // 反推出LCS
  const lcs = []
  let i = aLen, j = bLen
  while (i > 0 && j > 0) {
    if (A[i - 1] === B[j - 1]) { // 相等，取该字符
      lcs.push(A[i - 1])
      --i
      --j
    } else { // 不相等时，走更大的方向
      dp[i - 1][j] > dp[i][j - 1] ? --i : --j
    }
  }
  lcs.reverse()

  // 从LCS构造SCS
  let scs = ''
  i = j = 0
  for (const ch of lcs) {
    while (A[i] !== ch) scs += A[i++]
    while (B[j] !== ch) scs += B[j++]
    scs += ch
    ++i
    ++j
  }
  // A、B剩余的
  scs += A.slice(i) + B.slice(j)

  return scs
};

module.exports = shortestCommonSupersequence;