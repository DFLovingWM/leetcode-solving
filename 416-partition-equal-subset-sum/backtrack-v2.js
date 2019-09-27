/**
 * 回溯：每次拿一个数字
 * 时间：68ms
 */
var canPartition = function(nums) {
  if (nums.length < 2) return false
  
  let sum = 0
  let max = -Infinity
  for (let i = 0; i < nums.length; ++i) {
    max = Math.max(nums[i], max)
    sum += nums[i]
  }
  if (sum % 2 === 1) return false
  const target = sum / 2
  if (max > target) return false

  nums = nums.slice().sort((a, b) => b - a) // 降序
  return dfs(nums, 0, sum / 2)
};

function dfs (nums, i, targetSum) {
  if (targetSum === 0) return true // 成功的终止条件
  if (i === nums.length) return false

  for (i; i < nums.length; ++i) {
    if (nums[i] <= targetSum) {
      if (dfs(nums, i + 1, targetSum - nums[i])) return true
    }
  }
  return false
}

[
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100],
  [7,12,8,11],
  [1,1],
  [1, 2, 5],
  [1, 5, 11, 5],
  [1, 2, 3, 5],
].forEach(input => {
  console.log(canPartition(input))
})
