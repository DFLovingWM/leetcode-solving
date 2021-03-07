/**
 * 贪心
 * 
 * 时间：O(R * C * logC), 172ms
 */
var largestSubmatrix = function(matrix) {
  const [R, C] = [matrix.length, matrix[0].length];
  const heights = Array.from({ length: C }, () => 0);
  let res = 0;

  for (let r = 0; r < R; ++r) {
    // 构造以这一行为底的 heights
    for (let c = 0; c < C; ++c) {
      if (matrix[r][c] === 0) {
        heights[c] = 0;
      } else {
        ++heights[c];
      }
    }

    // 贪心：排序，为了让相似的柱形连在一起，尽可能创造最大的矩形
    const sortedHeights = heights.slice().sort((a, b) => a - b);

    // c为矩形左边界，从右(面积最大)到左(面积最小)
    for (let c = C - 1; c >= 0; --c) {
      // 因为从右到左，高度是降序的
      // 矩形的高就是以最小的、即左边界为准
      const area = (C - c) * sortedHeights[c];
      res = Math.max(res, area); 
    }
  }

  return res;
};