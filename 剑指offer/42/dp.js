/**
 * Bottom-up DP
 */
var maxSubArray = function (nums) {
  const n = nums.length;
  // const dp = Array.from({ length: n }, () => 0); // dp[i]表示以`arr[i]`结尾的最大和
  let prev = 0;
  let res = -Infinity;
  for (let i = 0; i < n; ++i) {
    let curr = nums[i];
    if (prev > 0) curr += prev; // 如果前面大于0，则连接
    res = Math.max(res, curr);
    prev = curr;
  }
  return res;
};