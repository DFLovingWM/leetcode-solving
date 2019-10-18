/**
 * 考察边界条件：
 * 维护数字的频次、频次的频次
 * 
 * 时间：O(N^2), 216ms
 */
var maxEqualFreq = function (nums) {
  const count = new Map() // 统计数字的个数（数字K有V个）
  const freq = new Map() // 统计个数的频次（数量为K的数字有V种）
  let res = 0

  for (let i = 0; i < nums.length; ++i) {
    const n = nums[i]
    const oldCount = count.get(n) || 0
    const newCount = oldCount + 1

    count.set(n, newCount)

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
    if (check(freq)) {
      res = i + 1
    }
  }

  return res
};

function check (freq) {
  const keys = Array.from(freq.keys())

  if (keys.length === 1) {
    const k = keys[0]
    if (freq.get(k) === 1) return true // 只有一种数字
    if (k === 1) return true // 数字的个数都是1，删掉一个，不会产生新频次
  } else if (keys.length === 2) {
    const [a, b] = keys
    if (freq.get(a) === 1) {
      if (a === 1 || a === b + 1) return true
    } else if (freq.get(b) === 1) {
      if (b === 1 || b === a + 1) return true
    }
  }

  return false
}

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