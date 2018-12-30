/**
 * 转化为[01背包问题]，并且是“恰好放满背包”
 * 用时[196ms]
 */
function canPartition (nums) {
  const sum = nums.reduce((acc, item) => acc + item, 0)
  if (sum % 2 === 1) return false

  const volume = sum / 2 // 根据题目限制，最大为1W
  const f = Array.from({ length: volume + 1 }, _ => false)
  f[0] = true
  for (let i = 1; i <= nums.length; ++i) {
    const cost = nums[i]
    for (let v = volume; v >= cost; v--) {
      f[v] = f[v] || f[v - cost]
    }
  }

  return f[volume] // 当然，这里其实可以前置到循环中，更快终止
}

module.exports = canPartition