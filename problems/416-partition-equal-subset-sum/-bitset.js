/**
 * bitset记录所有和
 */
var canPartition = function(nums) {
  if (nums.length < 2) return false

  let sum = 0
  let bits = 1 // 初始bit
  for (const num of nums) {
    sum += num
    bits |= (bits << num) // 原有的 + 加上num后的
  }
  if (sum % 2 === 1) return false

  const target = sum / 2
  return Boolean(bits & (1 << target))
};

module.exports = canPartition