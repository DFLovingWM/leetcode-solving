/**
 * 排序：
 * 时间：O(NlogN + N^2) = O(N^2)
 */
var connectSticks = function(sticks) {
  sticks = sticks.slice().sort((a, b) => a - b) // 非降序

  let res = 0
  while (true) {
    let sum = sticks.shift() + sticks.shift()
    res += sum
    if (sticks.length === 0) break
    // 维护有序列表
    let insertIndex = bisectRight(sticks, 0, sticks.length, sum)
    sticks.splice(insertIndex, 0, sum)
  }
  return res
}

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
  [2,4,3],
  [1,8,3,5],
  [3354,4316,3259,4904,4598,474,3166,6322,8080,9009],
].forEach(arr => {
  console.log(connectSticks(arr))
})
