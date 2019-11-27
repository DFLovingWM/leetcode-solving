/**
 * 1. 暴力法：对于每个i，能贮藏的雨水为min(leftMax, rightMax)
 * 
 * 时间：O(N^2)
 * 空间：O(1)
 */
var trap = function(heights) {
  let res = 0

  for (let i = 1; i < heights.length - 1; ++i) {
    // 左边最大值
    let leftMax = -Infinity
    for (let j = i - 1; j >= 0; --j) {
      if (heights[j] > leftMax) {
        leftMax = heights[j]
      }
    }

    // 右边最大值
    let rightMax = -Infinity
    for (let j = i + 1; j < heights.length; ++j) {
      if (heights[j] > rightMax) {
        rightMax = heights[j]
      }
    }

    // 取更小值
    let rain = Math.min(leftMax, rightMax)
    // 但该位置可能有屋檐，要减去
    rain = Math.max(rain - heights[i], 0)

    res += rain
  }

  return res
};

module.exports = trap