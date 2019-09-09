/**
 * 二分查找
 */
var shortestDistanceColor = function(colors, queries) {
  const color2Indexes = new Map()
  for (let i = 0; i < colors.length; ++i) {
    const color = colors[i]
    if (!color2Indexes.has(color)) {
      color2Indexes.set(color, [])
    }
    color2Indexes.get(color).push(i) // 维护一个关于下标的有序数组
  }

  const results = []
  for (const [i, targetColor] of queries) {
    if (!color2Indexes.has(targetColor)) { // 没有目标颜色
      results.push(-1)
      continue
    }

    const list = color2Indexes.get(targetColor)
    let result = Infinity
    const rightIndex = bisectRight(list, 0, list.length, i)
    if (rightIndex >= 0 && rightIndex < list.length) {
      result = Math.min(result, Math.abs(list[rightIndex] - i))
    }
    const leftIndex = rightIndex - 1
    if (leftIndex >= 0 && leftIndex < list.length) {
      result = Math.min(result, Math.abs(list[leftIndex] - i))
    }
    results.push(result)
  }
  return results
};

function bisectRight (arr, left, right, target) {
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2)
    if (target >= arr[middle]) {
      left = middle + 1
    } else {
      right = middle
    }
  }
  return left
}

[
  [[1,1,2,1,3,2,2,3,3], [[1,3],[2,2],[6,1]]],
  [[1,2], [[0,3]]],
].forEach(input => {
  console.log(shortestDistanceColor(...input))
})