/**
 * 哈希表
 * 
 * 时间：`O(N)`, 76ms
 */
var maxSubArrayLen = function(nums, K) {
  const getIndex = new Map([[0, -1]])
  let sum = 0
  let res = 0

  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i]

    if (getIndex.has(sum - K)) { // 存在同伴 => 更新答案
      res = Math.max(res, i - getIndex.get(sum - K))
    }

    if (!getIndex.has(sum)) { // 该值首次出现时才记录下标（保证最小索引，即最长长度）
      getIndex.set(sum, i)
    }
  }

  return res
};

[
  [[1, -1, 5, -2, 3], 3],
  [[-2, -1, 2, 1], 1],
].forEach(input => {
  console.log(maxSubArrayLen(...input))
})
