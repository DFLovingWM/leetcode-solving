/**
 * 一维DP
 * 
 * 时间：O(N), 192ms
 */
var maxNonOverlapping = function(nums, target) {
  const n = nums.length;

  // dp[i]：表示前`i`个元素对应的最大数目
  const dp = Array.from({ length: n + 1 }, () => 0);

  // 前缀和 prefix[sum]：表示和为`sum`的最大下标
  // 注意：这里下标是 +1 的
  // “最大”意味着子数组更短，那么前面的子数组就更多，是贪心的体现
  const prefix = new Map();
  prefix.set(0, 0);

  let sum = 0;
  for (let i = 1; i <= n; ++i) {
    sum += nums[i - 1];
    if (prefix.has(sum - target)) { // 遇上满足的子数组
      const j = prefix.get(sum - target);
      dp[i] = dp[j] + 1;
    }
    dp[i] = Math.max(dp[i], dp[i - 1]); // 保证dp是递增的
    prefix.set(sum, i);
  }

  return dp[n];
};

[
  [[1,1,1,1,1], 2],
  [[-1,3,5,1,4,2,-9], 6],
  [[-2,6,6,3,5,4,1,2,8], 10],
  [[0,0,0], 0],
].forEach(A => {
  console.log(maxNonOverlapping(...A))
})