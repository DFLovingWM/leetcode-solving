/**
 * 0-1背包问题，二维数组
 * dp[i][j]表示前i个数字中，和是否能够达到j
 * 
 * 时间：O(NK), 1416ms
 * 空间：O(NK), 71.6MB
 */
var canPartition = function(nums) {
  if (nums.length < 2) return false

  const sum = nums.reduce((a, b) => a + b, 0)
  if (sum % 2 === 1) return false
  
  const volume = sum / 2
  const n = nums.length
  const canReach = Array.from({ length: n + 1 }, () => {
    return Array.from({ length: volume + 1 }, () => {
      return false
    })
  })
  canReach[0][0] = true

  for (let i = 1; i <= n; ++i) { // 遍历每一个数字
    // 将上一行结果的copy到这一行
    for (let j = 0; j <= volume; ++j) {
      canReach[i][j] = canReach[i - 1][j]
    }

    // 根据上一行，递推这一行
    const least = nums[i - 1]
    for (let j = least; j <= volume; ++j) { // 遍历可能达到的每一个和
      if (canReach[i - 1][j - least]) {
        canReach[i][j] = true
      }
    }
  }

  return canReach[n][volume]
};

module.exports = canPartition