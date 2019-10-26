/**
 * 排序 + DP(Top-down)
 */
var deleteAndEarn = function (nums) {
  nums.sort((a, b) => a - b)
  return helper(nums, 0, nums.length - 1, new Map())
};

// 递归函数
function helper (nums, left, right, cache) {
  if (left > right) return 0

  const key = getKey(left, right)
  if (cache.has(key)) return cache.get(key)

  let res = 0
  let prev = null // 上一个数字
  for (let i = left; i <= right; ++i) {
    if (nums[i] !== prev) { // 可选数字
      prev = nums[i]

      let j = i + 1
      while (j <= right && nums[j] === nums[i]) ++j
      
      // 现在，区间[i, j)都是数字arr[i]
      let score = nums[i] * (j - i) // 获得点数

      let l = i - 1
      while (l >= left && nums[l] === nums[i] - 1) --l
      score += helper(nums, left, l, cache)

      let r = j
      while (r <= right && nums[r] === nums[i] + 1) ++r
      score += helper(nums, r, right, cache)

      res = Math.max(res, score)
    }
  }
  cache.set(key, res)
  return res
}

// 参数哈希
function getKey (left, right) {
  return `${left}, ${right}`
}

module.exports = deleteAndEarn