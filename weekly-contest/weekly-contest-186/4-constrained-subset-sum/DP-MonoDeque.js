/**
 * DP + 单调deque
 * 
 * 时间：O(NlogN), 100ms
 */
var constrainedSubsetSum = function(nums, k) {
  const n = nums.length;
  // dp[i]表示以nums[i]结尾的最大和
  const dp = new Array(n + 1).fill(0);
  // 单调递减的双端队列。head是max
  const deque = [];
  let res = -Infinity;

  for (let i = 0; i < n; ++i) {
    // 抛弃k范围左边的旧元素
    if (deque[0] < i - k) {
      deque.shift();
    }

    // 递推：dp[i] = max(0, dp[i-1], dp[i-2], ..., dp[i-k]) + nums[i-1]
    // prev表示前面最大的dp[j]
    const prev = i > 0 ? dp[deque[0]] : 0;
    // Math.max(prev, 0)分别表示拼接、不拼接
    dp[i] = Math.max(prev, 0) + nums[i];
    res = Math.max(res, dp[i]);
    // console.log(i, dp[i], nums[deque[0]]);

    // 安排新元素
    while (deque.length > 0 && dp[deque[deque.length - 1]] <= dp[i]) {
      deque.pop();
    }
    deque.push(i);
  }

  return res;
};

[
  [[10,2,-10,5,20], 2],
  [[-1,-2,-3], 1],
  [[10,-2,-10,-5,20], 2],
  [[-7609,249,-1699,2385,9125,-9037,1107,-8228,856,-9526], 9],
].forEach(A=>{
  console.log(constrainedSubsetSum(...A))
})