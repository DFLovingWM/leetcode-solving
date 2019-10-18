/**
 * 二分查找：始终遵循【左闭右开】
 * 
 * 时间：O(logX), 80ms
 */
var mySqrt = function (x) {
  let left = 0
  let right = x + 1 // 上界设置成(x+1)，开区间

  while (left < right) {
    const middle = left + Math.floor((right - left) / 2)
    const result = (middle + 1) * (middle + 1)

    if (result <= x) { // (2)说明(middle + 1)是候选值，故条件为(m+1)*(m+1)<=x
      left = middle + 1 // (1)从这里出发推条件：middle不符合
    } else {
      right = middle
    }
  }

  return left
};

[
  4,
  8,
  9,
  2147483647,
].forEach(n => {
  console.log(mySqrt(n))
})