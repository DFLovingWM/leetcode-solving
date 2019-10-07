/**
 * HashMap + HashSet
 */
var uniqueOccurrences = function(arr) {
  const countMap = new Map()
  for (const n of arr) {
    countMap.set(n, (countMap.get(n) || 0) + 1)
  }

  const countSet = new Set()
  for (const c of countMap.values()) {
    if (countSet.has(c)) { // 重复
      return false
    }
    countSet.add(c)
  }
  return true
};