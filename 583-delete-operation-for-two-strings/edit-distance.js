/**
 * 转化为【编辑距离】问题，没有“修改”操作
 * dp[i][j]表示A[:i]转变为B[:j]需要的最小步数
 * 
 * 时间：O(NM), 208ms
 */
var minDistance = function (A, B) {
  const dp = Array.from({ length: A.length + 1 }, () => {
    return Array.from({ length: B.length + 1 }, () => {
      return Infinity
    })
  })
  
  // 初始值
  for (let i = 0; i <= A.length; ++i) dp[i][0] = i // 需要删除i个字符
  for (let j = 0; j <= B.length; ++j) dp[0][j] = j // 需要增加j个字符

  // 推导
  for (let i = 1; i <= A.length; ++i) {
    for (let j = 1; j <= B.length; ++j) {
      if (A[i - 1] === B[j - 1]) { // 如果下一个字符相等，则不需要操作
        dp[i][j] = dp[i - 1][j - 1]
      } else { // 如果不相等，看哪种操作最少
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // 删除
          dp[i][j - 1] + 1 // 增加
        )
      }
    }
  }

  return dp[A.length][B.length]
};

module.exports = minDistance