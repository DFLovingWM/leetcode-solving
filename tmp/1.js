/**
 * 二分查找
 */
var numMatchingSubseq = function(S, words) {
  const getIndex = new Map()
  for (let i = 0; i < S.length; ++i) {
    const ch = S[i]
    if (!getIndex.has(ch)) {
      getIndex.set(ch, [])
    }
    getIndex.get(ch).push(i)
  }
  
  return words.filter(word => search(getIndex, word)).length
};

function search (getIndex, word) {
  let start = -1
  for (const ch of word) {
    const idx = getIndex.get(ch) || []
    const i = bisectRight(idx, start, 0, idx.length)
    if (i === idx.length) return false
    start = idx[i]
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

[
  ["abcde",["a","bb","acd","ace"]]
].forEach(input => {
  console.log(numMatchingSubseq(...input))
})