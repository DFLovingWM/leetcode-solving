/**
 * 单调deque解法
 * 
 * 时间：`O(N)`, 104ms
 */
var maxSlidingWindow = function (nums, K) {
  const deque = [] // 单调递减队列，队首为max
  const res = []

  for (let i = 0; i < nums.length; ++i) {
    // 窗口右移，抛弃最左的旧元素
    if (deque.length > 0 && i - K === deque[0]) {
      deque.shift()
    }
    // 维护单调性
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop()
    }
    // 可以了，增加该下标
    deque.push(i)

    // 输出最大值
    if (i + 1 >= K) {
      res.push(nums[deque[0]])
    }
  }

  return res
};

module.exports = maxSlidingWindow