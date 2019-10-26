/**
 * 二分枚举：取右中位数，对应左开右闭
 */
var mySqrt = function (x) {
  let left = -1
  let right = x

  while (left < right) {
    const middle = left + Math.floor((right - left + 1) / 2) // 右中位数

    if (middle * middle <= x) {
      left = middle
    } else {
      right = middle - 1
    }
  }

  return left
};

module.exports = mySqrt