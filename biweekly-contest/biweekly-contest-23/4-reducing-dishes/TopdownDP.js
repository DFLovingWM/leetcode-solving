/**
 * Top-down DP
 * 
 * 时间：O(N^2), 268ms
 * 空间：O(N^2), 73MB
 */
var maxSatisfaction = function (nums) {
  // 排序，让大的在后面。DP时需要递增系数(k)
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const memo = new Map();

  // 当前从`i`开始、之前已经煮了`k`道菜，最后能达到的最大总和
  function helper(i, k) {
    if (i >= n) {
      return 0;
    }

    const key = i * n + k;
    if (memo.has(key)) {
      return memo.get(key);
    }

    // 不煮
    let res = helper(i + 1, k);
    // 煮
    res = Math.max(res, nums[i] * (k + 1) + helper(i + 1, k + 1));
    memo.set(key, res);
    return res;
  }

  return helper(0, 0);
};

module.exports = maxSatisfaction;