/**
 * 单调队列 + 滑动窗口
 */
var longestSubarray = function(nums, limit) {
  const n = nums.length;
  const minDeque = [];
  const maxDeque = [];

  // 开始滑动窗口
  let [L, R] = [0, -1];
  let res = 0;
  let d = 0;
  while (R < n) {
    // 满足则继续扩张
    while (d <= limit && R < n) {
      res = Math.max(res, R - L + 1); // 更新答案
      const newCh = nums[++R];

      // min deque
      while (minDeque.length > 0 && nums[minDeque[minDeque.length - 1]] >= newCh) {
        minDeque.pop();
      }
      minDeque.push(R);
      // max deeue
      while (maxDeque.length > 0 && nums[maxDeque[maxDeque.length - 1]] <= newCh) {
        maxDeque.pop();
      }
      maxDeque.push(R);

      d = nums[maxDeque[0]] - nums[minDeque[0]];
    }

    // 不满足，缩减
    while (minDeque.length > 0 && minDeque[0] <= L) minDeque.shift();
    while (maxDeque.length > 0 && maxDeque[0] <= L) maxDeque.shift();
    d = nums[maxDeque[0]] - nums[minDeque[0]];
    ++L;
  }
  return res;
};

[
  [[8,2,4,7], 4],
  [[10,1,2,4,7,2], 5],
  [[4,2,2,2,4,4,2,2], 0],
].forEach(A=> {
  console.log(longestSubarray(...A))
})