/**
 * 用时[1020ms]
 */
function canPartition (nums) {
  let sum = nums.reduce((acc, item) => acc + item, 0)
  if (sum & 1) return false

  let halfSum = sum / 2

  let exist = Array.from({ length: sum + 1 }, () => false)
  exist[0] = true
  for (const num of nums) {
    // tmp为这一轮需要变更的数组
    let tmp = Array.from({ length: sum + 1 }, () => false)

    // 遍历exist数组
    for (let i = 0; i < exist.length; ++i) {
      if (exist[i]) {
        tmp[i + num] = true
      }
      if (tmp[halfSum]) return true // 遇到目标为true，直接返回
    }

    // 将tmp合并到exist
    for (let i = 0; i < exist.length; ++i) {
      exist[i] = exist[i] || tmp[i]
    }
  }

  return false
}

/**
 * 优化版本：逆序，不需要额外的tmp数组，用时[120ms]
 * （然而。。。。。就是背包解法的代码啊！！！！）
 */
function canPartition (nums) {
  let sum = nums.reduce((acc, item) => acc + item, 0)
  if (sum & 1) return false

  let halfSum = sum / 2

  let exist = Array.from({ length: sum + 1 }, () => false)
  exist[0] = true
  for (const num of nums) {
    // 逆序遍历exist数组
    for (let i = exist.length - 1; i >= num; --i) {
      exist[i] = exist[i] || exist[i - num]
      if (exist[halfSum]) {
        return true // 遇到目标为true，直接返回
      }
    }
  }

  return false
}

module.exports = canPartition