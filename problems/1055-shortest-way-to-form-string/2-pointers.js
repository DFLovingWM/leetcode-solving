/**
 * 双指针
 * 
 * 时间：最坏情况`O(TS)`, 60ms
 */
var shortestWay = function (source, target) {
  let res = 0
  let j = 0 // 遍历source
  let i = 0 // 遍历target
  const charSet = new Set(Array.from(source))

  while (i < target.length) {
    if (!charSet.has(target[i])) return -1 // 根本就没有这个字符，直接返回-1

    while (j < source.length && source[j] !== target[i]) ++j

    if (j === source.length) { // 找不到，另起
      ++res
      j = 0
    } else {
      ++i
      ++j
    }
  }

  return res + 1
};

module.exports = shortestWay