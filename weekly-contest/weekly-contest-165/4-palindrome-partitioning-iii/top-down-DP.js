/**
 * Top-down DP
 * 
 * 时间：`O(N^2 * K)`, 84ms
 * 空间：`O(NK)`
 */
var palindromePartition = function (S, K) {
  // 预处理
  const n = S.length
  const count = calc(S)
  const cache = new Map()

  function helper (i, k) {
    if (k === K) {
      if (i === n) return 0
      return count[i][n - 1]
    }

    const key = i * 101 + k
    if (cache.has(key)) return cache.get(key)

    // 枚举切割位置
    let res = Infinity
    for (let j = i + 1; j <= n; ++j) {
      const tmp = helper(j, k + 1) + count[i][j - 1]
      res = Math.min(res, tmp)
    }
    cache.set(key, res)
    return res
  }

  return helper(0, 1)
};

function calc (S) {
  const n = S.length
  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))

  // 奇数回文
  for (let center = 0; center < n; ++center) { // 遍历中心点
    dp[center][center] = 0
    expand(S, dp, center - 1, center + 1)
  }

  // 偶数回文
  for (let center = 0; center + 1 < n; ++center) { // 遍历中心点
    dp[center][center + 1] = S[center] === S[center + 1] ? 0 : 1
    expand(S, dp, center - 1, center + 2)
  }

  return dp
}

function expand (S, dp, i, j) {
  for (; i >= 0 && j < S.length; --i, ++j) {
    dp[i][j] = dp[i + 1][j - 1] + (S[i] === S[j] ? 0 : 1)
  }
}

module.exports = palindromePartition