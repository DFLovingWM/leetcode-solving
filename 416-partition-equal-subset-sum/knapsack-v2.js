/**
 * 0-1背包问题，空间从二维优化到一维：第i行的右边取决于第(i-1)行的左边，所以可以逆序更新
 * dp[j]表示和是否能够达到j
 * 
 * 时间：O(NK), 112ms
 * 空间：O(K), 35.2MB
 */
var canPartition = function(nums) {
  if (nums.length < 2) return false

  const sum = nums.reduce((a, b) => a + b, 0)
  if (sum % 2 === 1) return false

  const volume = sum / 2
  const canReach = Array.from({ length: volume + 1 }, () => false)
  canReach[0] = true
  
  for (let i = 0; i < nums.length; ++i) { // 进行N次
    const least = nums[i]
    for (let j = volume; j >= least; --j) { // 逆序遍历
      if (!canReach[j] && canReach[j - least]) {
        canReach[j] = true
      }
    }
  }

  return canReach[volume]
};

module.exports = canPartition