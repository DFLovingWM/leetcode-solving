/**
 * 同样是HashMap，不过是O(N)实现
 * 参考：https://leetcode.com/problems/maximum-equal-frequency/discuss/403628/Easy-Python-Solution-Concise-10-lines-Explained-O(N)
 * 
 * 时间：O(N), 120ms
 */
var maxEqualFreq = function (nums) {
  const count = new Map() // 统计数字的个数（数字K有V个）
  const freq = new Map() // 统计个数的频次（数量为K的数字有V种）
  let res = 0
  let maxCount = 0 // 记录最多个数

  for (let i = 0; i < nums.length; ++i) {
    const n = nums[i]
    const oldCount = count.get(n) || 0
    const newCount = oldCount + 1

    count.set(n, newCount)
    maxCount = Math.max(maxCount, newCount)

    // 旧频次
    if (oldCount !== 0) {
      freq.set(oldCount, freq.get(oldCount) - 1)
      if (freq.get(oldCount) === 0) {
        freq.delete(oldCount)
      }
    }
    // 新频次
    freq.set(newCount, (freq.get(newCount) || 0) + 1)

    // 如果满足条件，则更新前缀长度
    if (
      maxCount * (freq.get(maxCount) || 0) === i ||
      (maxCount - 1) * ((freq.get(maxCount - 1) || 0) + 1) === i ||
      maxCount === 1
    ) {
      res = i + 1
    }
  }

  return res
};

[
  [1,1],
  [1,2,3,4,5],
  [2,2,1,1,5,3,3,5],
  [1,1,1,2,2,2,3,3,3,4,4,4,5],
  [1,1,1,2,2,2], // 5
  [10,2,8,9,3,8,1,5,2,3,7,6], // 8
].forEach(nums => {
  console.log(maxEqualFreq(nums))
})