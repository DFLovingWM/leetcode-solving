/**
 * 二分枚举。使最大值最小，使用bisectLeft
 */
var smallestDivisor = function (nums, threshold) {
  let [left, right] = [1, Math.pow(10, 6) + 1]

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    
    if (can(mid, nums, threshold)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
};

function can (mid, nums, threshold) {
  let sum = 0
  for (const n of nums) {
    sum += Math.ceil(n / mid)
  }
  return sum <= threshold
}