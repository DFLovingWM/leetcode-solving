/**
 * DP预处理 + 回溯
 * 
 * 时间：84ms
 */
var partition = function (text) {
  const n = text.length

  // dp[i][j]表示text[i:j]是否回文
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(false))
  // 1个字符回文
  for (let i = 0; i < n; ++i) dp[i][i] = true
  // 0个字符回文
  for (let i = 1; i < n; ++i) dp[i][i - 1] = true
  // 迭代
  for (let i = n - 1; i >= 0; --i) {
    for (let j = i + 1; j < n; ++j) {
      if (dp[i + 1][j - 1] && text[i] === text[j]) {
        dp[i][j] = true
      }
    }
  }

  const res = []
  function helper (from, acc) {
    if (from === n) {
      res.push(acc.slice())
      return
    }

    for (let to = from; to < n; ++to) {
      if (dp[from][to]) {
        acc.push(text.slice(from, to + 1))
        helper(to + 1, acc)
        acc.pop()
      }
    }
  }
  helper(0, [])
  return res
};

module.exports = partition