/**
 * 数学/分类讨论/贪心
 * 
 * 时间：`O(N)`
 */
var maxSumDivThree = function (nums) {
  nums.sort((a, b) => a - b) // 升序排序

  let sum = 0
  const m1 = [], m2 = []

  for (const num of nums) {
    sum += num
    if (num % 3 === 1) {
      m1.push(num)
    } else if (num % 3 === 2) {
      m2.push(num)
    }
  }

  if (sum % 3 === 1) { // 余1 => 去掉1个1、或2个2
    let min = Infinity
    if (m1.length >= 1) {
      min = Math.min(min, m1[0])
    }
    if (m2.length >= 2) {
      min = Math.min(min, m2[0] + m2[1])
    }
    sum -= min
  } else if (sum % 3 === 2) { // 余2 => 去掉1个2、或2个1
    let min = Infinity
    if (m1.length >= 2) {
      min = Math.min(min, m1[0] + m1[1])
    }
    if (m2.length >= 1) {
      min = Math.min(min, m2[0])
    }
    sum -= min
  }

  return sum
};

module.exports = maxSumDivThree