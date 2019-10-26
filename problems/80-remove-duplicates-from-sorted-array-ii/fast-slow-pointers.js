/**
 * 快慢指针进行线性遍历，有两种情况需要写：
 * 1. 遇到新元素（并且需要记录第一次出现的位置）
 * 2. 旧元素但下标相差小于2
 */
var removeDuplicates = function(nums) {
  return reduceDuplicatesTo(nums, 2)
};

/**
 * 通用：
 * 将数组`nums`中的重复元素减少到`most`
 */
function reduceDuplicatesTo (nums, most) {
  let write = 0, milestone = 0
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] !== nums[write]) { // 新元素
      nums[++write] = nums[i]
      milestone = i // 记录第一次出现的位置
    } else if (i - milestone < most) { // 旧元素但在次数范围内（下标满足条件）
      nums[++write] = nums[i]
    }
  }
  return write + 1
}

[
  [1,1,1,2,2,3],
  [0,0,1,1,1,1,2,3,3],
].forEach(arr => {
  console.log(removeDuplicates(arr))
})
