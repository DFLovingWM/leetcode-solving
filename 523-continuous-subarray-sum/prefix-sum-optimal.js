/**
 * 每次使得 sum = sum % target，记录 sum
 * 参考：
 * https://leetcode.com/problems/continuous-subarray-sum/discuss/99499/Java-O(n)-time-O(k)-space/196267
 * Time: [84ms], O(N)
 */
function checkSubarraySum (nums, target) {
  let firstIndex = new Map()
  firstIndex.set(0, -1)

  let sum = 0
  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i]

    if (target === 0) { // Special case
      sum = (sum + num)
    } else {
      sum = (sum + num) % target // General case: just mod [target]
    }
    
    if (!firstIndex.has(sum)) {
      firstIndex.set(sum, i)
    } else {
      if (i - firstIndex.get(sum) >= 2) { // Subarray length >= 2 => target found.
        return true
      }
    }
  }

  return false
}

module.exports = checkSubarraySum