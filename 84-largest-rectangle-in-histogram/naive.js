/**
 * 对于每个柱子A，都找以A为高的、最宽的矩形，即左右都找第一个比它矮的
 * 
 * 时间：O(N^2), 844ms
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0

  for (let i = 0; i < heights.length; ++i) {
    // 找左边
    let L = i - 1
    while (L >= 0 && heights[L] >= heights[i]) --L

    // 找右边
    let R = i + 1
    while (R < heights.length && heights[R] >= heights[i]) ++R

    const area = heights[i] * ((i - L - 1) + (R - i - 1) + 1)
    maxArea = Math.max(maxArea, area)
  }

  return maxArea
};

module.exports = largestRectangleArea