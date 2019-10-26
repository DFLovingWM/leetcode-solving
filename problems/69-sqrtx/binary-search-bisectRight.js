/**
 * 二分枚举：最大化最小值，故二分写法参照`bisectRight`
 */
var mySqrt = function (x) {
  let left = 0
  let right = x + 1 // 上界设置成(x+1)，开区间

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    
    if (mid * mid <= x) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left - 1
};

module.exports = mySqrt