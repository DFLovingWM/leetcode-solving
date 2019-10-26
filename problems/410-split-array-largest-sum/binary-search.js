/**
 * 二分枚举最大和，检验是否存在（@todo 为什么count要从1数起）
 * 时间：O(NlogX)
 */
var splitArray = function (nums, K) {
  const sum = nums.reduce((a, b) => a + b, 0)
  if (sum === Math.pow(2, 31) - 1) return 

  let left = 0
  let right = sum + 1

  while (left < right) {
    const mid = left + Math.floor((right - left + 1) / 2) // 左中位数
    const n = cut(nums, mid) // 切成n份

    if (n < K) { // 满足，就找更小的
      right = mid
    } else {
      left = mid + 1
    }

    if (n >= K) { // 份数足够，说明候选值满足条件或较小，所以还能扩大一点
      left = mid
    } else { // 份数不够，说明候选值过大，需要缩小
      right = mid - 1
    }
  }

  return left
};

function cut (nums, maxSum) {
  let acc = 0
  let count = 0
  for (const n of nums) {
    if (acc + n > maxSum) {
      ++count
      acc = 0
    }
    acc += n
  }
  return count
}

[
  [[1,2147483647],2],
  [[7,2,5,10,8], 2],
].forEach(input => {
  console.log(splitArray(...input))
})