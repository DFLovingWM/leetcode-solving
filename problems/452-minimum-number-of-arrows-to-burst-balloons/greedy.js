/**
 * 求最多不重叠区间
 * 时间：O(NlogN), 168ms
 */
var findMinArrowShots = function(points) {
  return countNotOverlay(points)
};

function countNotOverlay (arr) {
  if (arr.length === 0) return 0

  arr = arr.slice().sort((a, b) => a[1] - b[1])
  let count = 1
  let lastEnd = arr[0][1]
  for (const [start, end] of arr) {
    if (start > lastEnd) { // 新的不重叠区间
      lastEnd = end // 更新lastEnd
      ++count // 计数+1
    }
  }
  return count
};

[
  [[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]],
  [[10,16], [2,8], [1,6], [7,12]],
  [[1,2],[2,3],[3,4],[4,5]],
].forEach(p => {
  console.log(findMinArrowShots(p))
})