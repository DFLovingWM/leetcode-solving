/**
 * Top-down DP
 */
var maximumScore = function(nums, multipliers) {
  const n = nums.length;
  const m = multipliers.length;
  const memo = new Map();

  function dp(l, r) {
    const i = l + (n - 1) - r;
    if (i === m) {
      return 0;
    }

    const key = `${l}|${r}`
    if (memo.has(key)) {
      return memo.get(key);
    }

    const res = Math.max(
      nums[l] * multipliers[i] + dp(l + 1, r),
      nums[r] * multipliers[i] + dp(l, r - 1)
    );
    memo.set(key, res);
    return res;
  }

  return dp(0, n - 1);
};