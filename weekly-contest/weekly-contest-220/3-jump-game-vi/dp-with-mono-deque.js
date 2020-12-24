/**
 * DP + 单调队列
 * 
 * 时间：O(N), 188ms
 */
var maxResult = function(nums, k) {
  const n = nums.length;
  const dp = Array.from({ length: n }, () => 0);
  const deque = [];

  dp[0] = nums[0];
  deque.push(0);

  for (let i = 1; i < n; ++i) {
    // 抛弃窗口外的不可达的元素
    while (deque.length > 0 && deque[0] < i - k) {
      deque.shift();
    }
    // 求DP
    dp[i] = nums[i] + dp[deque[0]];
    // 放弃更差元素
    while (deque.length > 0 && dp[deque[deque.length - 1]] <= dp[i]) {
      deque.pop();
    }
    // console.log(i, deque[0]);
    // 加入新元素
    deque.push(i);
  }

  return dp[n - 1];
};

module.exports = maxResult;
