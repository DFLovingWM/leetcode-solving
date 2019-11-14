/**
 * 单调队列解法
 * 
 * 时间：`O(N)`, 104ms
 */
var maxSlidingWindow = function (nums, K) {
  const queue = [] // 单调递减队列，队首为max
  const res = []

  for (let i = 0; i < nums.length; ++i) {
    // 窗口右移，抛弃最左的旧元素
    if (queue.length > 0 && i - K === queue[0]) {
      queue.shift()
    }
    // 维护单调性
    while (queue.length > 0 && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop()
    }
    // 可以了，增加该下标
    queue.push(i)

    // 输出最大值
    if (i + 1 >= K) {
      res.push(nums[queue[0]])
    }
  }

  return res
};

module.exports = maxSlidingWindow