/**
 * 排序
 * 时间：O(NlogN), 108ms
 */
var frequencySort = function(s) {
  const countMap = new Map()
  for (const ch of s) {
    countMap.set(ch, (countMap.get(ch) || 0) + 1)
  }

  const items = Array.from(countMap.entries()).sort((a, b) => b[1] - a[1]) // 按照值(频次)降序排序

  let ret = ''
  for (const [char, count] of items) {
    ret += char.repeat(count)
  }
  return ret
};
