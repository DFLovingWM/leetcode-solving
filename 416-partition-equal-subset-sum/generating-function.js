/**
 * 母函数解法
 */
function canPartition (nums) {
  const sum = nums.reduce((acc, b) => acc + b, 0)
  if (sum % 2) return false

  const target = sum / 2
  let c1 = Array.from({ length: target + 1 }, () => 0)
  c1[0] = 1
  let c2 = [...c1]
  for (const num of nums) {
    for (let i = 0; i + num <= target; ++i) {
      c2[i + num] += c1[i] // 两种路径的组合数相加
    }

    // console.log('c1: ', c1)
    // console.log('c2: ', c2)

    for (let i = 0; i <= target; ++i) {
      c1[i] = c2[i]
      c2[i] = c1[i]
    }
  }

  return c1[target] > 0
}

module.exports = canPartition