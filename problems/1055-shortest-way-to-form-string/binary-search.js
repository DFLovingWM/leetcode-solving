/**
 * 二分查找
 * 
 * 时间：`O(S + TlogS)`, 68ms
 */
var shortestWay = function (source, target) {
  const getIndex = new Map()
  for (let i = 0; i < source.length; ++i) {
    const ch = source[i]
    if (!getIndex.has(ch)) {
      getIndex.set(ch, [])
    }
    getIndex.get(ch).push(i)
  }

  let res = 0
  let start = -1

  for (let i = 0; i < target.length; ++i) {
    const ch = target[i]
    if (!getIndex.has(ch)) return -1

    const indexes = getIndex.get(ch)
    const j = search(indexes, start, 0, indexes.length)
    if (j === indexes.length) { // 找不到，就+1，然后从头找
      ++res
      start = -1
      --i
    } else {
      start = indexes[j]
    }
  }
  
 
  return res + 1
};

function search (arr, x, left, right) {
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

module.exports = shortestWay