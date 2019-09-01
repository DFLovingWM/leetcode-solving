/**
 * 二分
 */
var numSmallerByFrequency = function(queries, words) {
  const arr = words.map(count).sort((a, b) => a - b)

  let res = []
  for (const query of queries) {
    const target = count(query)
    const pos = bisectRight(arr, 0, arr.length, target)
    res.push(arr.length - pos)
  }
  return res
};

// 频率：O(K)
function count (string) {
  let minCh = Array.from(string).reduce((a, b) => {
    if (a.charCodeAt(0) <= b.charCodeAt(0)) {
      return a
    } else {
      return b
    }
  }, string[0])

  let res = 0
  for (const ch of string) {
    if (ch === minCh) ++res
  }
  return res
}

// 二分查找：上界
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
  [["cbd"], ["zaaaz"]],
  [["bbb","cc"], ["a","aa","aaa","aaaa"]],
].forEach(input => {
  console.log(numSmallerByFrequency(...input))
})
