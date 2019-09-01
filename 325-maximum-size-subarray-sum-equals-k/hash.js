/**
 * Hash: O(N)
 */
var maxSubArrayLen = function(nums, K) {
  const getIndex = new Map()
  let sum = 0
  getIndex.set(sum, -1)
  let maxRange = 0
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i]
    if (getIndex.has(sum - K)) {
      // 存在同伴，则更新最大范围
      maxRange = Math.max(maxRange, i - getIndex.get(sum - K))
    }
    if (!getIndex.has(sum)) {
      // 不存在该值时才覆写（保证最远索引、最长长度）
      getIndex.set(sum, i)
    }
  }
  return maxRange
};

[
  [[1, -1, 5, -2, 3], 3],
  [[-2, -1, 2, 1], 1],
].forEach(input => {
  console.log(maxSubArrayLen(...input))
})
