/**
 * Top-down DP
 * 
 * 时间：`O(N^2)`, 108ms
 */
var PredictTheWinner = function (nums) {
  const n = nums.length;
  const memo = new Map();

  function helper (left, right) {
    if (left > right) return 0;

    const key = `${left}#${right}`;
    if (memo.has(key)) return memo.get(key);

    const res = Math.max(
      nums[left] - helper(left + 1, right), // 拿头
      nums[right] - helper(left, right - 1) // 拿尾
    )
    memo.set(key, res);
    return res;
  }

  return helper(0, n - 1) >= 0
};

module.exports = PredictTheWinner