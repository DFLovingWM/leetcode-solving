/**
 * Bottom-up
 * 
 * 时间：O(N^2)
 * 空间：O(N)
 */
var bestTeamScore = function(scores, ages) {
  const n = scores.length;
  const arr = [];
  for (let i = 0; i < n; ++i) {
    arr.push([ages[i], scores[i]]);
  }
  arr.sort((A, B) => {
    if (A[0] !== B[0]) return A[0] - B[0]; // age up
    return A[1] - B[1]; // score up
  });

  // dp[i]表示以`arr[i]`结尾的最大分数
  const dp = Array.from({ length: n }, () => 0);
  let res = 0;
  for (let i = 0; i < n; ++i) {
    dp[i] = arr[i][1]; // 初始值：一个人成队

    for (let j = 0; j < i; ++j) {
      if (arr[i][1] >= arr[j][1]) { // 能连得上（没有冲突）
        dp[i] = Math.max(dp[i], dp[j] + arr[i][1]);
      }
    }

    res = Math.max(res, dp[i]);
  }
  return res;
};

module.exports = bestTeamScore;
