/**
 * 动态规划：
 */
var rob = function (nums) {
  const n = nums.length;
  if (n === 1) return nums[0];
  return Math.max(
    robbing(nums.slice(0, n - 1)),
    robbing(nums.slice(1, n))
  );
};

// LeetCode 198
function robbing(nums) {
  const n = nums.length;
  // 状态：dp[i]表示经历前i个房子能获取的最大价值
  const dp = Array.from({ length: n + 1 }, () => 0);
  // 迭代
  for (let i = 1; i <= n; ++i) {
    dp[i] = Math.max(
      dp[i - 1], // 不偷i
      nums[i - 1] + (i - 2 >= 0 ? dp[i - 2] : 0) // 偷i
    );
  }
  // 目标
  return dp[n];
};