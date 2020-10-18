/**
 * Top-down
 * 
 * 时间：O(N^2)
 * 空间：O(N^2)
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

  const memo = new Map();

  // 状态定义：
  // 当前为第`i`个人，上一次选了第`prev`个人，最终能达到的最大分数
  function helper(i, prev) {
    if (i === n) return 0;

    const key = `${i}|${prev}`;
    if (memo.has(key)) return memo.get(key);

    let res = 0;
    // 不选
    res = Math.max(res, helper(i + 1, prev));
    // 选
    const [age, score] = arr[i];
    if (prev === -1 || age === arr[prev][0] || score >= arr[prev][1]) { // 前提：没有矛盾
      res = Math.max(res, helper(i + 1, i) + score);
    }
    memo.set(key, res);
    return res;
  }

  return helper(0, -1);
};

module.exports = bestTeamScore;
