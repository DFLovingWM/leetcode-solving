/**
 * 二分查找
 * 
 * 时间：O(NlogM), 9176ms
 */
var longestSubsequence = function (arr, difference) {
  const getIndex = new Map()
  for (let i = 0; i < arr.length; ++i) {
    if (!getIndex.has(arr[i])) {
      getIndex.set(arr[i], [])
    }
    getIndex.get(arr[i]).push(i) // 维护关于下标的升序数组
  }

  let maxLength = 1
  const visit = new Set()
  for (let i = 0; i < arr.length; ++i) {
    if (visit.has(i)) continue

    let length = 1
    let from = i + 1
    let target = arr[i] + difference

    while (true) {
      const indexList = getIndex.get(target) || []
      const j = bisectLeft(indexList, 0, indexList.length, from) // 二分查找
      if (j === indexList.length) break
      ++length
      visit.add(indexList[j])
      from = indexList[j] + 1
      target += difference
    }

    maxLength = Math.max(maxLength, length)
  }
  return maxLength
};

function bisectLeft (arr, left, right, target) {
  while (left < right) {
    const middle = left + (right - left >> 1)
    if (target <= arr[middle]) {
      right = middle
    } else {
      left = middle + 1
    }
  }
  return left
}

[
  [[1,2,3,4], 1],
  [[1,3,5,7], 1],
  [[1,5,7,8,5,3,4,2,1], -2]
].forEach(input => {
  console.log(longestSubsequence(...input))
})