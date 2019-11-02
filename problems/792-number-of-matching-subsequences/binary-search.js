/**
 * 对`text`构建下标列表，二分查找
 * 
 * 时间：`O(N + MlogN)`, 216ms
 */
var numMatchingSubseq = function (text, words) {
  const getIndex = new Map()
  for (let i = 0; i < text.length; ++i) {
    const ch = text[i]
    if (!getIndex.has(ch)) {
      getIndex.set(ch, [])
    }
    getIndex.get(ch).push(i)
  }

  let res = 0
  for (const word of words) {
    if (exist(getIndex, word)) {
      ++res
    }
  }
  return res
};

function exist (getIndex, word) {
  let start = -1
  for (const ch of word) {
    const indexes = getIndex.get(ch) || []
    const i = bisectRight(indexes, start, 0, indexes.length)
    if (i === indexes.length) {
      return false
    }
    start = indexes[i]
  }
  return true
}

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

console.log(numMatchingSubseq('abcde', ["a", "bb", "acd", "ace"]))