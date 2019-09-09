/**
 * 暴力/模拟
 */
var pourWater = function(heights, waterCount, pourIndex) {
  while (waterCount--) {
    // 往左边找
    let i = pourIndex
    while (i - 1 >= 0 && heights[i - 1] <= heights[i]) --i
    if (i < pourIndex) {
      ++heights[i]
      // console.log(heights)
      continue
    }

    // 往右边找
    i = pourIndex
    while (i + 1 < heights.length && heights[i + 1] <= heights[i]) ++i
    if (i > pourIndex) {
      ++heights[i]
      // console.log(heights)
      continue
    }

    // 掉在该位置
    ++heights[pourIndex]
    // console.log(heights)
  }
  return heights
};

[
  [[2,1,1,2,1,2,2], 4, 3],
  [[1,2,3,4], 2, 2],
  [[3,1,3], 5, 1],
  [[1,2,3,4,3,2,1,2,3,4,3,2,1], 2, 5],
  [[1,2,3,4,3,2,1,2,3,4,3,2,1], 5, 5],
].forEach(input => {
  console.log(pourWater(...input))
})
