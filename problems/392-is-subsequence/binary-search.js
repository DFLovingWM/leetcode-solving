/**
 * 建立映射：字符 => 下标。然后进行多次二分查找
 * 
 * 时间：`O(N + MlogN)`, 148ms
 */
var isSubsequence = function(pattern, text) {
  const getIndex = new Map()
  for (let i = 0; i < text.length; ++i) {
    if (!getIndex.has(text[i])) {
      getIndex.set(text[i], [])
    }
    getIndex.get(text[i]).push(i)
  }
  
  let start = -1
  for (const ch of pattern) {
    const indexes = getIndex.get(ch) || []
    const i = bisectRight(indexes, start, 0, indexes.length)
    if (i === indexes.length) return false
    start = indexes[i]
  }
  return true
};

// 二分查找
function bisectRight (arr, x, left, right) {
  while (left < right) {
    const mid = left + (right - left >>> 1)
    if (x >= arr[mid]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}

module.exports = isSubsequence