/**
 * 回溯：对于每个数来说，有“取”或“不取”两种方案
 * 时间：O(2^N), 76ms
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
  if (i === nums.length || targetSum < 0) return false // 剪枝：已经超过sum了，就不需要再继续了

  return dfs(nums, i + 1, targetSum - nums[i]) || // 取这个数
    dfs(nums, i + 1, targetSum) // 不取这个数
}

module.exports = canPartition