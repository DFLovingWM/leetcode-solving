/**
 * 1. 暴力解法：O(N2)
 */
var maxArea = function (heights) {
  let max = 0
  for (let i = 0; i < heights.length; ++i) {
    for (let j = i + 1; j < heights.length; ++j) {
      let tmp = (j - i) * Math.min(heights[i], heights[j])
      max = Math.max(max, tmp)
    }
  }
  return max
}

/**
 * 2. 启发式解法：O(N)
 * @param {*} heights 
 */
var maxArea = function (heights) {
  let max = 0
  let i = 0
  let j = heights.length - 1

  while (i < j) {
    let area = (j - i) * Math.min(heights[i], heights[j])
    max = Math.max(max, area)

    if (heights[i] > heights[j]) {
      --j
    } else {
      ++i
    }
  }

  return max
}

exports.maxArea = maxArea
