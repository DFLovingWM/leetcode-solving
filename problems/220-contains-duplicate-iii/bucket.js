/**
 * O(N)的bucket解法：
 * [参考这个题解](https://leetcode-cn.com/problems/contains-duplicate-iii/solution/li-yong-tong-de-yuan-li-onpython3-by-zhou-pen-chen/)
 */
var containsNearbyAlmostDuplicate = function(nums, I, V) {
  if (V < 0) return false // Special case: 值的差，不可能小于0
  if (I <= 0) return false // Special case: 不同索引的差，肯定大于0

  const getValue = new Map()

  // 获取桶的索引
  function getKey (value) {
    return Math.floor(value / (V + 1))
  }

  for (let i = 0; i < nums.length; ++i) {
    const key = getKey(nums[i])

    if (getValue.has(key)) {
      // 在同一个桶内
      return true
    }
    if (getValue.has(key - 1) && getValue.get(key - 1) + V >= nums[i]) {
      // 在前一个桶，但是差值小于V
      return true
    }
    if (getValue.has(key + 1) && nums[i] + V >= getValue.get(key + 1)) {
      // 在后一个桶，但是差值小于V
      return true
    }

    getValue.set(key, nums[i])
    if (getValue.size > I) { // 保持Map的大小不超过I
      getValue.delete(getKey(nums[i - I]))
    }
  }
  return false
};

[
  [[1,2,3,1], 3, 0],
  [[1,0,1,1], 1, 2],
  [[1,5,9,1,5,9], 2, 3],
].forEach(input => {
  console.log(containsNearbyAlmostDuplicate(...input))
})
