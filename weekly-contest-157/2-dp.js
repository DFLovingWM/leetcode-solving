/**
 * DP：dp[n]表示到数字n的最大长度
 * 
 * 时间：O(N)
 */
var longestSubsequence = function (arr, difference) {
  const dp = new Map()
  let res = 1

  for (const n of arr) {
    if (!dp.has(n - difference)) { // 没有连贯的，只能作为等差数列的首项
      dp.set(n, 1)
    } else { // 连贯的，长度+1
      const acc = 1 + dp.get(n - difference)
      dp.set(n, acc)
      res = Math.max(res, acc) // 记录最大值，作为结果
    }
  }

  return res
};

[
  [[1,2,3,4], 1],
  [[1,3,5,7], 1],
  [[1,5,7,8,5,3,4,2,1], -2]
].forEach(input => {
  console.log(longestSubsequence(...input))
})